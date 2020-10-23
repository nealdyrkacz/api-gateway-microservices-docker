import App from './app';
import dotenv from 'dotenv';
import { ServiceCAMQPConsumer } from './v0/lib/amqp/serviceCAMQPConsumer';
//import { db } from './database/models/index';

async function start() {
  // initialize configuration
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  //require('./database/models/index');
  dotenv.config();

  const serviceCConsumer = new ServiceCAMQPConsumer();
  serviceCConsumer.connect();

  const app = new App();

  app.start();
}

start();
