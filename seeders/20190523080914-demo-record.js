'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const userId = await queryInterface.rawSelect(
      'Users', {
        where: {
          name: '阿明'
        }
      },
      ['id']
    )
    if (userId) {
      return queryInterface.bulkInsert(
        'Records',
        [{
            name: '午餐',
            category: '餐飲食品',
            amount: 60,
            date: '2019-05-22',
            createdAt: new Date(),
            updateAt: new Date(),
          },
          {
            name: '晚餐',
            category: '餐飲食品',
            amount: 60,
            date: '2019-05-22',
            createdAt: new Date(),
            updateAt: new Date(),
          },
          {
            name: '捷運',
            category: '交通出行',
            amount: 30,
            date: '2019-05-21',
            createdAt: new Date(),
            updateAt: new Date(),
          },
          {
            name: '看棒球',
            category: '休閒娛樂',
            amount: 350,
            date: '2019-05-12',
            createdAt: new Date(),
            updateAt: new Date(),
          },
          {
            name: '租金',
            category: '家居物業',
            amount: 10000,
            date: '2019-05-01',
            createdAt: new Date(),
            updateAt: new Date(),
          }
        ], {})
    }
  },
  async down(queryInterface, Sequelize) {
    const userId = await queryInterface.rawSelect(
      'Users', {
        where: {
          name: '阿明'
        }
      },
      ['id']
    )
    if (userId) {
      return queryInterface.bulkInsert(
        'Records',
        [{
          userId: useId
        }, ], {})
    }
  }
};