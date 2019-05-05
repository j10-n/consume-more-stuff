const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    return new req.database.User()
      .fetchAll()
      .then(users => {
        return res.json(users);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    let username = req.body.username;
    let nameLast = req.body.nameLast;
    let nameFirst = req.body.nameFirst;
    let email = req.body.email;
    let password = req.body.password;

    return new req.database.User({
      username,
      nameLast,
      nameFirst,
      email,
      password
    })
      .save()
      .then(users => {
        return res.json({ success: true });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
        const express = require("express");
      });
  });

router.post("/edit/:id", (req, res) => {
  let userId = req.params.id;
  let username = req.body.username;
  let nameLast = req.body.nameLast;
  let nameFirst = req.body.nameFirst;
  let email = req.body.email;
  let password = req.body.password;

  return new req.database.User({
    id: userId,
    username,
    nameLast,
    nameFirst,
    email,
    password
  })
    .save()
    .then(res.send("user edited"))
    .catch(err => {
      console.log("error", err);
      res.sendStatus(500);
    });
});

module.exports = router;
