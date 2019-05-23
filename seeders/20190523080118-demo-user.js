'use strict';
const bcrypt = require('bcryptjs')
let password = '1234'

const getPasswordHash = new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return reject(err)
    return resolve(salt)
  })
})

const getPasswordHash2 = salt => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) return reject(err)
      return resolve(hash)
    })
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await getPasswordHash;
    const hashPassword = await getPasswordHash2(salt);
    return queryInterface.bulkInsert(
      'Users',
      [{
        name: '阿明',
        email: 'ming@gmail.com',
        password: hashPassword,
        createdAt: new Date(),
        updateAt: new Date(),
      }], {})
  }

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Users',
      [{
        name: '阿明'
      }])
  }
};