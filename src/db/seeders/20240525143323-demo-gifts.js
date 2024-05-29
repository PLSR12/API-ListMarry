'use strict'

const { v4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'gifts',
      [
        {
          id: v4(),
          name: 'Geladeira',
          description: 'Geladeira show show show',
          short_description: 'Geladeira show',
          assigned_by: 'pedrolucasdossantos7@gmail.com',
          short_description: 'Geladeira show',
          createdAt: new Date(),
          updatedAt: new Date(),
          category_id: '3b0e31a7-2dd2-4a01-b801-c3994cd0dd1b',
          image:
            'https://electrolux.vtexassets.com/arquivos/ids/211028/Refrigerator_IF55B_Front_Electrolux_Portuguese_Principal.jpg?v=637638693808830000',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gifts', null, {})
  },
}
