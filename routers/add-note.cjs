const express = require("express");

const { getAddNote, postAddNote } = require("../controller/notes.cjs");

const router = express.Router();

router.get("/", getAddNote);

router.post("/add-note", postAddNote);

module.exports = router;
