const express = require('express');
const router = express();
const moment = require('moment')
const {
  authenticated
} = require('../config/auth');

const db = require('../models');
const User = db.User;
const Record = db.Record;

// 建立 Record 頁面
router.get('/new', authenticated, (req, res) => {
  const today = moment().format('YYYY-MM-DD')
  res.render('new', {
    today
  });
});

// 建立 Record 動作
router.post('/new', authenticated, (req, res) => {
  Record
    .create({
      name: req.body.name,
      category: req.body.category,
      amount: req.body.amount,
      date: req.body.date,
      userId: req.user.id,
    })
    .then(record => {
      return res.redirect('/');
    })
    .catch(err => {
      return res.status(422).json(err);
    })
});

// 編輯 Record 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      if (!user) {
        return res.error();
      }
      Record.findOne({
          where: {
            userId: req.user.id,
            id: req.params.id
          }
        })
        .then(record => {
          return res.render('edit', {
            record: record,
          });
        })
        .catch(err => {
          return res.status(422).json(err);
        })
    })
});

// 編輯 Record 動作
router.put('/:id/edit', authenticated, (req, res) => {
  Record.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      }
    })
    .then(record => {
      Object.assign(record, req.body);

      record
        .save()
        .then(record => {
          res.redirect('/');
        })
        .catch(err => {
          return res.status(422).json(err);
        });
    })
});

// 刪除 Record 動作
router.delete('/:id/delete', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      if (!user) {
        return res.error();
      }
      Record.destroy({
          where: {
            userId: req.user.id,
            id: req.params.id
          }
        })
        .then(record => {
          return res.redirect('/');
        })
        .catch(err => {
          return res.status(422).json(err);
        })
    })
});

module.exports = router;