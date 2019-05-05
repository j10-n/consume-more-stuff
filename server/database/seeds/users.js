exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Jimz-E",
          nameLast: "Lui",
          nameFirst: "Jimzy",
          email: "Jimzy.Lui@gmail.com",
          hashedPassword: "asdfasfaf"
        },
        {
          username: "J10",
          nameLast: "Nakamoto",
          nameFirst: "Justen",
          email: "Justen.Nakamoto@gmail.com",
          hashedPassword: "asdfasfaf"
        },
        {
          username: "T-Dogg",
          nameLast: "Taydus",
          nameFirst: "Tyler",
          email: "Tyler.Taydus@gmail.com",
          hashedPassword: "asdfasfaf"
        },
        {
          username: "Buddhason",
          nameLast: "Shiigi",
          nameFirst: "Ronson",
          email: "Ronson.Shiigi@gmail.com",
          hashedPassword: "asdfasfaf"
        }
      ]);
    });
};
