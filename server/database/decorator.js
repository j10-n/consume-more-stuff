const User = require('./models/User');
const Genre = require('./models/Genre');
const Post = require('./models/Post');

module.exports = function(req, res, next) {
  req.database = { User, Genre, Post };
  next();
};
