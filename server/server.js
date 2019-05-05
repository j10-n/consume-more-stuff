const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

// data vars
const PORT = process.env.PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

//routes
const userRoutes = require("./routes/users/index");
const postRoutes = require("./routes/posts/index");
const genreRoutes = require("./routes/genres/index");
const authRoutes = require("./routes/auth/index.js");

//authorization shite
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const passport = require("passport");

if (!PORT) {
  console.log("No Port Found");
}
if (!SESSION_SECRET) {
  console.log("No Session Secret Found");
}
if (!REDIS_HOSTNAME) {
  console.log("No Redis Hostname Found");
}
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) {
  return process.exit(1);
}

// setup server middleware
const app = express();
app.use(bodyParser.json({ extended: true }));

// decorate request with database
app.use(decorator);

//authorization middleware
app.use(
  session({
    store: new RedisStore(),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

//route for users, posts,genres, and auth
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/genres", genreRoutes);
app.use("/api", authRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server stated on port: ${PORT}`);
});
