import App from './app';
import dotenv from 'dotenv';
import NodeENVError from './errors/nodeENVError';

async function start() {
  /************************************************/
  /************************************************/
  //    check for valid NODE_ENV                  //
  //    initialize configuration                  //
  //    start redis client                        //
  //    initialize db connection & init ORM models//
  //    start App object / Express server         //
  /************************************************/
  /************************************************/

  //make sure we are setting a NODE_ENV
  try {
    if (
      process.env.NODE_ENV != 'development' &&
      process.env.NODE_ENV != 'test' &&
      process.env.NODE_ENV != 'production'
    ) {
      throw new NodeENVError(
        'An incorrect Node ENV has been set, only `development`, `test`, and `production` are allowed.',
      );
    } else {
      //config
      if (process.env.NODE_ENV == 'development') {
        dotenv.config();
      }

      // initialize Redis Client
      //require('./redisClient');

      //initialize Sequelize ORM
      require('./database/models/index');

      const app = new App();
      app.start();
    }
  } catch (e) {
    console.error(e);
  }
}

start();
