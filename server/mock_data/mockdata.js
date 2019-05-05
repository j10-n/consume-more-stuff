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

const arrPurchases = [
  {
    id: 1,
    storeId: 1,
    buyerId: 2,
    timestamp: "2019-05-01",
    subtotal: 3.45,
    taxes: 3.2,
    shipping: 2.0,
    total: 5.0,
    confirmationNo: "fjksdf98hefe98fh"
  }
];
const arrOrders = [
  {
    id: 1,
    purchaseId: 1,
    itemId: 1,
    qty: 8
  }
];
const arrReviews = [
  {
    id: 1,
    itemId: 1,
    buyerId: 1,
    title: "this product is the best thing since sliced bread!",
    comment: "Please, take all my money.",
    rating: "3.22"
  }
];
const arrFAQ = [
  {
    id: 1,
    itemId: 1,
    buyerId: 1,
    comment: "Does this come in blue?"
  },
  {
    id: 2,
    itemId: 1,
    buyerId: 0,
    comment: "Sometimes.  When you turn out the lights...and think real hard!"
  }
];
const arrImages = [
  { id: 1, itemId: 1, path: "cannabis.jam.jpg", order: 999 },
  { id: 2, itemId: 2, path: "cricket.jam.jpg", order: 999 },
  { id: 3, itemId: 3, path: "toe.jam.jpg", order: 999 },
  { id: 4, itemId: 4, path: "jewelry.weird1.jpg", order: 999 },
  { id: 5, itemId: 5, path: "jewelry.weird2.jpg", order: 999 },
  { id: 6, itemId: 6, path: "jewelry.weird3.jpg", order: 999 },
  { id: 7, itemId: 7, path: "rocket.launcher1.jpg", order: 999 },
  { id: 8, itemId: 8, path: "rocket.launcher2.jpg", order: 999 },
  { id: 9, itemId: 9, path: "rocket.launcher3.jpg", order: 999 },
  { id: 10, itemId: 10, path: "weird.toy1.jpg", order: 999 },
  { id: 11, itemId: 11, path: "weird.toy2.jpg", order: 999 },
  { id: 12, itemId: 12, path: "weird.toy3.jpg", order: 999 }
];
const arrShoppingCarts = [
  {
    id: 1,
    sessionId: 1,
    itemId: 1,
    qty: 9,
    timestamp: "2019-05-01 22:25"
  }
];
