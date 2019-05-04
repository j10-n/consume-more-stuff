const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "genres";
  }
  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model("Genres", Genres);
