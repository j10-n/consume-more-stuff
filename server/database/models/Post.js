const bookshelf = require("../bookshelf");
const User = require('./User');

class Post extends bookshelf.Model {
  get tableName() {
    return "posts";
  }
  get hasTimestamps() {
    return false;
  }
  ownedBy() { return this.hasOne('User', 'id', 'userId'); }
}

module.exports = bookshelf.model("Post", Post);
