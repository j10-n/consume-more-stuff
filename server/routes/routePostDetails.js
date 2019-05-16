const express = require("express");
const router = express.Router();

<<<<<<< HEAD:server/routes/routePostDetails.js
  router
  .route("/:id")
  .get((req, res) => {
    return new req.database.Post()
      .where("id", req.params.id)
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
  .route("/Update/:id")
=======
router
  .route("/")
>>>>>>> 34d51babe0e08493d37b8e4e64293974531f1a17:server/routes/posts/index.js
  .get((req, res) => {
    return new req.database.Post()
      .where("id", req.params.id)
      .fetchAll()
      .then(posts => {
<<<<<<< HEAD:server/routes/routePostDetails.js
        console.log("posts", posts);
=======
        // console.log("posts", posts);
        // let data = [];
>>>>>>> 34d51babe0e08493d37b8e4e64293974531f1a17:server/routes/posts/index.js
        let arr = posts.models;
        return res.json({ data: arr });
      })
      .catch(err => {
        console.log(err);
        return res.sendStatus(500);
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
      .then(posts => {
        return res.json({ success: true });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

router.post("/edit/:id", (req, res) => {
  let postId = req.params.id;
  let image = req.body.image;
  let title = req.body.title;
  let description = req.body.description;
  let genre = req.body.genre;
  let userId = req.body.userId;
  let created_at = req.body.created_at;
  let updated_on = req.body.updated_on;
  // console.log("title", title);
  return new req.database.Post({
    id: postId,
    image,
    title,
    description,
    genre,
    userId,
    created_at,
    updated_on
  })
    .save()
    .then(res.send("it worked?"))
    .catch(err => {
      console.log("error", err);
      res.sendStatus(500);
    });
});

router.post("/delete/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  return new req.database.Post({ id })
    .destroy()
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
