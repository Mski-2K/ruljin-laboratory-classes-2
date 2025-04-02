const express = require('express');
const path = require("path");

const router = express.Router();

router.get('', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "../views", "/logout.html"));
})

module.exports = router;
