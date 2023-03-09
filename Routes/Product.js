const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("get all the products");
});

module.exports = router;
