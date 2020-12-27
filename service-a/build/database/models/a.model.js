"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initA = exports.A = void 0;
const sequelize_1 = require("sequelize");
class A extends sequelize_1.Model {
}
exports.A = A;
function initA(sequelize) {
    A.init({
        id: {
            type: sequelize_1.DataTypes.UUIDV4,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        data: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
            unique: false,
        },
    }, {
        sequelize: sequelize,
        tableName: 'a',
    });
}
exports.initA = initA;
//# sourceMappingURL=a.model.js.map