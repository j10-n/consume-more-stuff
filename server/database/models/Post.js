const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "posts";
  }
  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model("Post", Post);
