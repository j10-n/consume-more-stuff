const express = require("express");
const router = express.Router();

router.route('/')
.get((req, res) => {
  return new req.database.User().fetchAll()
    .then((users) => {
      return res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})
.post((req, res) => {
  let username = req.body.username;
  let nameLast = req.body.nameLast;
  let nameFirst = req.body.nameFirst;
  let email = req.body.email;
  let hashedPassword = req.body.hashedPassword;
  
  return new req.database.User({
    username,
    nameLast,
    nameFirst,
    email,
    hashedPassword
  })
  .save()
    .then((users) => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);const express = require('express');
    });
})

module.exports = router;
