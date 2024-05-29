'use strict'

const { v4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          id: '3b0e31a7-2dd2-4a01-b801-c3994cd0dd1b',
          name: 'Eletrodomesticos',
          description: 'Eletrodomesticos show show show',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  },
}
