import App from './app';
import dotenv from 'dotenv';
import { ServiceAAMQPConsumer } from './v0/lib/amqp/serviceAAMQPConsumer';

//import { db } from './database/models/index';

async function start() {
  // initialize configuration
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  //require('./database/models/index');
  dotenv.config();

  //const serviceAConsumer = new ServiceAAMQPConsumer();
  //serviceAConsumer.connect();

  const app = new App();

  app.start();
}

start();
