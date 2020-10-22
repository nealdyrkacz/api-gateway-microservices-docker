import App from './app';
import dotenv from 'dotenv';
import { ServiceBAMQPConsumer } from './v0/lib/serviceBAMQPConsumer';
//import { db } from './database/models/index';

async function start() {
  // initialize configuration
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  //require('./database/models/index');
  dotenv.config();

  ServiceBAMQPConsumer.connect();

  const app = new App();

  app.start();
}

start();
