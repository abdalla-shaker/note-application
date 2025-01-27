const express = require("express");
const bodyParser = require("body-parser");

const addNoteRoutes = require("./routers/add-note.cjs");
const viewNoteRoutes = require("./routers/view-note.cjs");
const path = require("path");

const app = express();

// * App configurations.
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// * Router configurations.
app.use(addNoteRoutes);
app.use(viewNoteRoutes);

app.listen(3000);
