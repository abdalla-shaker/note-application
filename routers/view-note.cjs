const express = require("express");

const { getViewNote } = require("../controller/notes.cjs");

const router = express.Router();

router.get("/view-notes", getViewNote);

module.exports = router;
