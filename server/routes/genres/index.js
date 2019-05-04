const express = require('express');
const router = express.Router();

router.route('/genres')
.get((req, res) => {
  return new req.database.Genre().fetchAll()
    .then((genres) => {
      return res.json(genres);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})
.post((req, res) => {
  return new req.database.Genre(req.body).save()
    .then((genres) => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})

module.exports = router;