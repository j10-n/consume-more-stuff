const express = require('express');
const router = express.Router();

router.route('/')
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
  let image = req.body.image;
  let title = req.body.title;
  let description = req.body.description;
  let genre = req.body.genre;
  let userId = req.body.userId;
  let created_at = req.body.created_at;
  let updated_on = req.body.updated_on;

  return new req.database.Post({
    image, 
    title,
    description,
    genre,
    userId,
    created_at,
    updated_on
  })
    .save()
    .then((posts) => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})

module.exports = router;