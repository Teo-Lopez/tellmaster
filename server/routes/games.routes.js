const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ games: [{ _id: 1 }, { _id: 2 }] });
  //TO-DO Employ req.query.limit for DB search.
});

module.exports = router;