// const express = require('express');
// const router = express.Router();
// const monthList = require('../public/data/months.json').results;
// const categoryList = require('../public/data/categories.json').results;
// const {
//   authenticated
// } = require('../config/auth');
// const Sequelize = require('sequelize');

// const db = require('../models');
// const Record = db.Record;
// const User = db.User;

// console.log('filter 頁面');

// router.post('/?filterMonth=:filterMonth&?filterCategory=:filterCategory', authenticated, (req, res) => {
//   // 宣告變數作為篩選條件


//   let filterMonth = `${req.params.filterMonth}`
//   // req.params.filterMonth || '';
//   // const filterCategory = req.query.filterCategory || '';
//   // const filterCategoryChineseName = categoryList[filterCategory];
//   console.log('資料', req);
//   console.log('月份', filterMonth);
//   // console.log('分類', filterCategory, filterCategoryChineseName);

//   User.findByPk(req.user.id)
//     .then((user) => {
//       if (!user) {
//         return res.error();
//       }
//       Record.findAll({
//           where: {
//             userId: req.user.id,
//             date: {
//               [Sequelize.Op.like]: `{filterMonth}`,
//             },
//             // category: {
//             //   [Op.like]: filterCategory,
//             // }
//           }

//         })
//         .then(records => {
//           let totalAmount = 0;
//           if (records.length > 0) {
//             totalAmount = records.map(record => parseInt(record.amount)).reduce((a, b) => a + b);
//           }
//         })

//       return res.render('index', {
//         records,
//         monthList,
//         categoryList,
//         totalAmount,
//         filterMonth,
//         filterCategory,
//         filterCategoryChineseName
//       });
//     })
//     .catch((error) => {
//       return res.status(422).json(error);
//     })
// })

// module.exports = router;