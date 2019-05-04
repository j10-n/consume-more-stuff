const express = require('express');
const router = express.Router();

router.route('/posts')
.get((req, res) => {
  return new req.database.Post().fetchAll()
    .then((posts) => {
      return res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})
.post((req, res) => {
  return new req.database.Posts(req.body).save()
    .then((posts) => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})

module.exports = router;