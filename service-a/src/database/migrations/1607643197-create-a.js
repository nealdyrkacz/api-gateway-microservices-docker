'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      { tableName: 'a' },
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        data: {
          type: Sequelize.DataTypes.JSONB,
          allowNull: false,
          unique: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.DataTypes.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.DataTypes.NOW,
        },
      },
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable({ tableName: 'a' });
  },
};
