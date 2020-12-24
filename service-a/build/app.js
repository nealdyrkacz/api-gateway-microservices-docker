"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const chalk_1 = __importDefault(require("chalk"));
require("reflect-metadata");
const routes_1 = require("./v0/routes");
const morgan_1 = __importDefault(require("morgan"));
//import adminBroRouter from './admin';
class App {
    constructor() {
        this.app = express_1.default();
        this.appName = 'service-a';
        this.configuration();
        this.workers = {};
        this.cpus = os_1.default.cpus().length;
        this.PORT = process.env.PORT || '5001';
        this.isDev = process.env.NODE_ENV !== 'production';
    }
    configuration() {
        process.title = this.appName;
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(morgan_1.default('[:date[clf]] :method :url :status :res[content-length] - :response-time ms'));
        this.configureRoutes();
    }
    configureRoutes() {
        this.routes = routes_1.configureRoutesV0(this.app);
        //this.routes.forEach(route => route.route.routes(this.app));
    }
    start() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        if (cluster_1.default.isMaster) {
            //console.log(
            //  chalk.inverse.cyan.bgBlack('\n****************** CONNECTED TO DATABASE: ' + process.env.DATABASE + '\n'),
            //);
            console.log(chalk_1.default.inverse.white.bgBlack('************ SERVICE A (' + this.PORT + ') START UP *************'));
            console.log('                 ' + chalk_1.default.underline('MASTER ' + process.pid));
            for (let i = 0; i < this.cpus; i++) {
                this.spawn();
            }
            cluster_1.default.on('exit', function (worker) {
                console.log(chalk_1.default.red('WORKER ' + worker.process.pid + ' died. spawning a new process...'));
                delete self.workers[worker.process.pid];
                self.spawn();
            });
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this.app.listen(this.PORT, () => { });
        }
    }
    spawn() {
        const worker = cluster_1.default.fork();
        this.workers[worker.process.pid] = worker;
        console.log(chalk_1.default.green('*********** WORKER: ' + worker.process.pid + ' SPAWNED ***********'));
        return worker;
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map