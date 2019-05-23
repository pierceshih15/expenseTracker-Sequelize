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
            "name": "午餐",
            "category": "utensils",
            "amount": "60",
            "date": "2019-05-22"
          },
          {
            "name": "晚餐",
            "category": "utensils",
            "amount": "60",
            "date": "2019-05-22"
          },
          {
            "name": "捷運",
            "category": "shuttle-van",
            "amount": "120",
            "date": "2019-05-21"
          },
          {
            "name": "電影：驚奇隊長",
            "category": "grin-beam",
            "amount": "220",
            "date": "2019-05-12"
          },
          {
            "name": "租金",
            "category": "home",
            "amount": "25000",
            "date": "2019-05-01"
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