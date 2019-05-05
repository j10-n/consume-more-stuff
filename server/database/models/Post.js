const bookshelf = require("../bookshelf");

class Post extends bookshelf.Model {
  get tableName() {
    return "posts";
  }
  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model("Post", Post);
