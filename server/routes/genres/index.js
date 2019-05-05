const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    return new req.database.Genre()
      .fetchAll()
      .then(genres => {
        return res.json(genres);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    let name = req.body.name;
    console.log(name);
    return new req.database.Genre({ name })
      .save()
      .then(genres => {
        return res.json({ success: true });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

module.exports = router;
