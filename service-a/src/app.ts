/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import cluster from 'cluster';
import os from 'os';
import chalk from 'chalk';
import 'reflect-metadata';
import { Route } from './api/v1/routes/route';
import { configureRoutes } from './api/v1/routes';
import morgan from 'morgan';
//import adminBroRouter from './admin';

class App {
  public app: express.Application;
  public routes: Route[];
  private appName: string;
  private workers: { [key: string]: cluster.Worker };
  private cpus: number;
  private PORT: string;
  private isDev: boolean;

  constructor() {
    this.app = express();
    this.appName = 'service-a';
    this.configuration();
    this.workers = {};
    this.cpus = os.cpus().length;
    this.PORT = process.env.PORT || '5001';
    this.isDev = process.env.NODE_ENV !== 'production';
  }

  private configuration() {
    process.title = this.appName;
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('[:date[clf]] :method :url :status :res[content-length] - :response-time ms'));
    this.configureRoutes();
  }

  private configureRoutes() {
    this.routes = configureRoutes(this.app);
  }

  public start(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    if (cluster.isMaster) {
      this.logStartUpInformation();
      for (let i = 0; i < this.cpus; i++) {
        this.spawn();
      }
      cluster.on('exit', function(worker: cluster.Worker) {
        console.log(chalk.red('WORKER ' + worker.process.pid + ' died. spawning a new process...'));
        delete self.workers[worker.process.pid];
        self.spawn();
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      this.app.listen(this.PORT, () => {});
    }
  }

  private spawn() {
    const worker: cluster.Worker = cluster.fork();
    this.workers[worker.process.pid] = worker;
    console.log(chalk.green('*********** WORKER: ' + worker.process.pid + ' SPAWNED ***********'));
    return worker;
  }
  private logStartUpInformation(): void {
    //console.log(
    //  chalk.inverse.cyan.bgBlack('\n****************** CONNECTED TO DATABASE: ' + process.env.DATABASE + '\n'),
    // );

    console.log(chalk.inverse.yellow.bgBlack(`************************************************************`));
    console.log(chalk.inverse.yellow.bgBlack(`************ NODE ENV: ${process.env.NODE_ENV} *************`));
    console.log(chalk.inverse.yellow.bgBlack(`************************************************************\n`));

    console.log(chalk.inverse.cyan.bgBlack(`************************************************************`));
    console.log(chalk.inverse.cyan.bgBlack('\n****************** CONNECTED TO DATABASE: ' + process.env.DB + '\n'));
    console.log(chalk.inverse.cyan.bgBlack(`************************************************************\n`));

    console.log(chalk.inverse.white.bgBlack(`************************************************************`));
    console.log(chalk.inverse.white.bgBlack('************ EXPRESS SERVER START UP *************'));
    console.log(chalk.inverse.white.bgBlack(`************************************************************\n`));
    console.log('                 ' + chalk.underline('MASTER ' + process.pid));
  }
}

export default App;
