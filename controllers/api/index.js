const router = require("express").Router();

// collect the user-routes.js endpoints
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// prefix /users to routes from user-routes.js
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
