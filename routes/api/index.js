const router = require("express").Router();

// collect the user-routes.js endpoints
const userRoutes = require("./user-routes");

// prefix /users to routes from user-routes.js
router.use("/users", userRoutes);

module.exports = router;
