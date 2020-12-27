/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    // A
    const a1Id = uuidv4();

    await queryInterface.bulkInsert('a', [
      {
        id: a1Id,
        data: JSON.stringify({ color: 'red' }),
        createdAt: new Date(moment.utc().format()),
        updatedAt: new Date(moment.utc().format()),
      },
    ]);

    const a2Id = uuidv4();

    await queryInterface.bulkInsert('a', [
      {
        id: a2Id,
        data: JSON.stringify({ color: 'blue' }),
        createdAt: new Date(moment.utc().format()),
        updatedAt: new Date(moment.utc().format()),
      },
    ]);

    const a3Id = uuidv4();

    await queryInterface.bulkInsert('a', [
      {
        id: a3Id,
        data: JSON.stringify({ color: 'white' }),
        createdAt: new Date(moment.utc().format()),
        updatedAt: new Date(moment.utc().format()),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete({ tableName: 'a' }, null, {});
  },
};
