exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
<<<<<<< HEAD:server/database/seeds/3_posts.js
          image: 'https://odesza.com/wp-content/uploads/2017/08/ODESZA-Backgrounds-Desktop-15-Retina.jpg',
          title: 'A Moment Apart',
          description: 'Space Music',
          genreId: 3,
          userId: 1
        },
        {
          image: 'https://i.ytimg.com/vi/22GEvDupWGo/maxresdefault.jpg',
          title: 'Peace Frog',
          description: 'Blood in the steets in the town of new haven',
          genreId: 5,
          userId: 2
        },
        {
          image: 'https://i.ytimg.com/vi/UCmUhYSr-e4/hqdefault.jpg',
          title: 'Sittin on the Dock of the Bay',
          description: 'Mr. Otis Redding',
          genreId: 7,
          userId: 3
        },
        {
          image: 'https://images.genius.com/cc58ce9c42abc46b84dbff844981e6fd.1000x1000x1.jpg',
          title: 'Spitting Venom',
          description: 'indie stylee',
          genreId: 5,
          userId: 1
        },
        {
          image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-244379-led-zeppelin-stairway-to-heavan-lawsuit-verdict.jpg',
          title: 'Black Dog',
          description: 'Great guitar riff',
          genreId: 5,
          userId: 3
=======
          image:
            "https://odesza.com/wp-content/uploads/2017/08/ODESZA-Backgrounds-Desktop-15-Retina.jpg",
          title: "A Moment Apart",
          description: "Space Music",
          genre: "Electric",
          userId: 1,
          created_at: "",
          updated_on: ""
        },
        {
          image: "https://i.ytimg.com/vi/22GEvDupWGo/maxresdefault.jpg",
          title: "Peace Frog",
          description: "Blood in the steets in the town of new haven",
          genre: "Rock",
          userId: 2,
          created_at: "past",
          updated_on: "less past"
        },
        {
          image: "https://i.ytimg.com/vi/UCmUhYSr-e4/hqdefault.jpg",
          title: "Sittin on the Dock of the Bay",
          description: "Mr. Otis Redding",
          genre: "Chill",
          userId: 3,
          created_at: "past",
          updated_on: "less past"
        },
        {
          image:
            "https://images.genius.com/cc58ce9c42abc46b84dbff844981e6fd.1000x1000x1.jpg",
          title: "Spitting Venom",
          description: "indie stylee",
          genre: "Indie",
          userId: 1,
          created_at: "march",
          updated_on: "april"
        },
        {
          image:
            "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-244379-led-zeppelin-stairway-to-heavan-lawsuit-verdict.jpg",
          title: "Black Dog",
          description: "Great guitar riff",
          genre: "Rock",
          userId: 3,
          created_at: "yesterday",
          updated_on: "never"
>>>>>>> 34d51babe0e08493d37b8e4e64293974531f1a17:server/database/seeds/posts.js
        }
      ]);
    });
};
