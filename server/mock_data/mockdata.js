const arrUsers = [
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
];

const arrStores = [
  {
    id: 1,
    sellerId: 1,
    name: "Jimzy's Jams"
  },
  {
    id: 1,
    sellerId: 1,
    name: "Justen's Jewelery"
  },
  {
    id: 1,
    sellerId: 1,
    name: "Tyler's Tailored Toys"
  },
  {
    id: 4,
    sellerId: 4,
    name: "Ronson's Retail Rocketlaunchers"
  }
];
const arrCategories = [
  {
    id: 1,
    name: "RocketLaunchers"
  },
  {
    id: 2,
    name: "Toys"
  },
  {
    id: 3,
    name: "Jewelry"
  },
  {
    id: 4,
    name: "Food"
  },
  {
    id: 5,
    name: "Other"
  }
];

const arrItems = [
  {
    id: 1,
    storeId: 1,
    categoryId: 1,
    name: "",
    description: "",
    price: "13.95",
    qty: 14,
    minReOrder: 3,
    flagship_YN: "Y",
    rating: 4.3
  }
];

const arrPurchases = [];
const arrOrders = [];
const arrReviews = [];
const arrFAQ = [];
const arrImages = [{ id: 1, itemId: 1, path: "WhiskeyJam.jpg", order: 999 }];
const arrShoppingCarts = [];
