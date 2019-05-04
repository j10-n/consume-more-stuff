exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          nameLast: "Lui",
          nameFirst: "Jimzy",
          email: "Jimzy.Lui@gmail.com",
          hashedPassword: "asdfasfaf",
          phone: "8084219969",
          verified_YN: "Y"
        },
        {
          id: 2,
          nameLast: "Nakamoto",
          nameFirst: "Justen",
          email: "Justen.Nakamoto@gmail.com",
          hashedPassword: "asdfasfaf",
          phone: "8084219969",
          verified_YN: "Y"
        },
        {
          id: 3,
          nameLast: "Taydus",
          nameFirst: "Tyler",
          email: "Tyler.Taydus@gmail.com",
          hashedPassword: "asdfasfaf",
          phone: "8084219969",
          verified_YN: "Y"
        },
        {
          id: 4,
          nameLast: "Shiigi",
          nameFirst: "Ronson",
          email: "Ronson.Shiigi@gmail.com",
          hashedPassword: "asdfasfaf",
          phone: "8084219969",
          verified_YN: "Y"
        }
      ]);
    });
};
