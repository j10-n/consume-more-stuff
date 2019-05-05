const User = require("./models/User");
const Post = require("./models/Post");
const Genre = require("./models/Genre");

module.exports = function(req, res, next) {
  req.database = { User, Genre, Post };
  next();
};
