const bookshelf = require("../bookshelf");

class Genre extends bookshelf.Model {
  get tableName() {
    return "genres";
  }
  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model("Genre", Genre);
