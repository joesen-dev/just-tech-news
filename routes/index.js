const router = require("express").Router();

// collect packaged group of API endpoints
const apiRoutes = require("./api");

// prefix packaged group of API endpoints with the path /api
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
