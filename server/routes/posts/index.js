const express = require("express");
const router = express.Router();

router
  .route("/:id")
  .get((req, res) => {
    return new req.database.Post()
      .where("userId", req.params.id)
      .fetchAll()
      .then(posts => {
        console.log("posts", posts);
        let arr = posts.models;
        return res.json({ data: arr });
      })
      .catch(err => {
        console.log(err);
        return res.sendStatus(500);
      });
  })
  .post((req, res) => {
    return new req.database.Post(req.body)
      .save()
      .then(posts => {
        return res.json({ success: true });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  router
  .route("/")
  .get((req, res) => {
    return new req.database.Post()
      .fetchAll()
      .then(posts => {
        console.log("posts", posts);
        // let data = [];
        let arr = posts.models;
        // for (var i = 0; i < arr.length; i++) {
        //   data.push(arr[i]._previousAttributes);
        // }
        // console.log("CLOSE", data);
        return res.json({ data: arr });
      })
      .catch(err => {
        console.log(err);
        return res.sendStatus(500);
      });
  })
  .post((req, res) => {
    return new req.database.Post(req.body)
      .save()
      .then(posts => {
        return res.json({ success: true });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

module.exports = router;
