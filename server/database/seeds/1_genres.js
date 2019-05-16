exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("genres")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("genres").insert([
        { name: "Pop" },
        { name: "R&B" },
        { name: "Electric/Dance" },
        { name: "Hip-Hop" },
        { name: "Rock" },
        { name: "Reggae" },
        { name: "Country" },
        { name: "Chill" }
      ]);
    });
};
