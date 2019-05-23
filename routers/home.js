const express = require("express");
const router = express.Router();
const monthList = require("../public/data/months.json").results;
const categoryList = require("../public/data/categories.json").results;
const db = require("../models");
const Record = db.Record;
const User = db.User;
const {
  authenticated
} = require("../config/auth");

router.get("/", authenticated, (req, res) => {
  const filteredMonth = req.query.filteredMonth ? req.query.filteredMonth : "";
  const filteredCategory = req.query.filteredCategory ?
    req.query.filteredCategory :
    "";
  let filteredCategoryChineseName = categoryList[filteredCategory];

  const user = User.findByPk(req.user.id)
    .then(user => {
      if (!user) {
        return res.error();
      }
      // Step1：若有篩選分類，則先透過 req.user.id 與 req.query.category 篩選
      if (filteredCategory) {
        Record.findAll({
          where: {
            userId: req.user.id,
            category: req.query.filteredCategory
          }
        }).then(records => {
          let totalAmount = 0;
          records = records
            .filter(record => {
              // 同時，若有篩選月份，則將 date 資料取出進行比對
              if (filteredMonth) {
                return (
                  Number(record.date.slice(5, 7)) === Number(filteredMonth)
                );
              }
              return true;
            })
            .map(record => {
              totalAmount += parseInt(record.amount, 10);
              return record;
            });
          return res.render("index", {
            records,
            monthList,
            categoryList,
            totalAmount,
            filteredMonth,
            filteredCategory,
            filteredCategoryChineseName
          });
        });
      } else {
        Record.findAll({
          where: {
            userId: req.user.id
          }
        }).then(records => {
          let totalAmount = 0;
          records = records
            .filter(record => {
              // 若有篩選月份，則將 date 資料取出進行比對
              if (filteredMonth) {
                return (
                  Number(record.date.slice(5, 7)) === Number(filteredMonth)
                );
              }
              return true;
            })
            .map(record => {
              totalAmount += parseInt(record.amount, 10);
              return record;
            });
          return res.render("index", {
            records,
            monthList,
            categoryList,
            totalAmount,
            filteredMonth,
            filteredCategory,
            filteredCategoryChineseName
          });
        });
      }
    })
    .catch(error => {
      return res.status(422).json(error);
    });
});

module.exports = router;