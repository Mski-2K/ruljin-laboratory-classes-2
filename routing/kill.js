const express = require("express");
const logger = require("../utils/logger");

const router = express.Router();
router.get("", (req, res) => {
    console.log(logger.getProcessLog());
    res.send("Killing server....");
    process.exit(0);
})

module.exports = router;