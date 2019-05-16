const bookshelf = require("../bookshelf");

class Genre extends bookshelf.Model {
  get tableName() {
    return "genres";
  }
  get hasTimestamps() {
    return true;
  }
  get hasMany(){
    return['Post','genreId','id']
  }
}

module.exports = bookshelf.model("Genre", Genre);
