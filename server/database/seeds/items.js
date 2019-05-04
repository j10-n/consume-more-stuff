exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          storeId: 2,
          categoryId: 3,
          name: "Fender Guitar",
          description: "Sick ass guitar.",
          price: 90.55,
          qty: 1,
          minReOrder: 1,
          flagship_YN: "Y",
          rating: 5
        },
        {
          storeId: 3,
          categoryId: 2,
          name: "Fat Bong",
          description: "Take Fat Rips",
          price: 20.75,
          qty: 20,
          minReOrder: 1,
          flagship_YN: "Y",
          rating: 4
        },
        {
          storeId: 1,
          categoryId: 1,
          name: "Vinyl Record Player",
          description: "Old School Music Listening",
          price: 1000.75,
          qty: 20,
          minReOrder: 1,
          flagship_YN: "Y",
          rating: 5
        },
        {
          storeId: 1,
          categoryId: 1,
          name: "Nike Shoes",
          description: "Lebron's Shoes",
          price: 60.75,
          qty: 200,
          minReOrder: 1,
          flagship_YN: "Y",
          rating: 5
        },
        {
          storeId: 1,
          categoryId: 1,
          name: "Air Conditioner",
          description: "Keep cool in the summer time",
          price: 160.75,
          qty: 200,
          minReOrder: 1,
          flagship_YN: "Y",
          rating: 5
        }
      ]);
    });
};
