import { Sequelize } from 'sequelize';
import { A, initA } from './a.model';

const sequelize = new Sequelize(
  process.env.DB as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    dialect: 'postgres',
  },
);

initA(sequelize);

export const db = {
  sequelize,
  Sequelize,
  A: A,
};
