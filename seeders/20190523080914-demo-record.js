'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const userId = await queryInterface.rawSelect(
      'Users', {
        where: {
          email: 'ming@gmail.com',
        }
      },
      ['id']
    )

    if (userId) {
      return queryInterface.bulkInsert(
        'Records',
        [{
            name: '午餐',
            category: 'utensils',
            amount: 60,
            date: '2019-05-22',
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: '晚餐',
            category: 'utensils',
            amount: 60,
            date: '2019-05-22',
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: '捷運',
            category: 'shuttle-van',
            amount: 30,
            date: '2019-05-21',
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: '看棒球',
            category: 'grin-beam',
            amount: 350,
            date: '2019-05-12',
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: '租金',
            category: 'home',
            amount: 10000,
            date: '2019-05-01',
            userId: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ], {})
    }
  },
  async down(queryInterface, Sequelize) {
    const userId = await queryInterface.rawSelect(
      'Users', {
        where: {
          email: 'ming@gmail.com',
        }
      },
      ['id']
    )
    if (userId) {
      return queryInterface.bulkInsert(
        'Records',
        [{
          userId: userId
        }, ], {})
    }
  }
};