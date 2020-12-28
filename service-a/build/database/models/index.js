"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const a_model_1 = require("./a.model");
const sequelize = new sequelize_1.Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});
a_model_1.initA(sequelize);
exports.db = {
    sequelize,
    Sequelize: sequelize_1.Sequelize,
    A: a_model_1.A,
};
//# sourceMappingURL=index.js.map