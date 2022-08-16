const router = require("express").Router();

// collect the user-routes.js endpoints
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");

// prefix /users to routes from user-routes.js
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
