'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gifts', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
      },
      name: {
        type: Sequelize.STRING,
      },
      short_description: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      assigned_by: {
        type: Sequelize.STRING,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('gifts')
  },
}
