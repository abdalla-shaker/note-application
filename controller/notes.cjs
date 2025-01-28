const Note = require("../model/notes-models.cjs");

exports.getAddNote = (req, res, next) => {
  res.render("index", { pageTitle: "Add a note", isTrue: false, path: "/" });
};
exports.postAddNote = (req, res, next) => {
  const notes = new Note(req.body);
  notes.save();
  res.redirect("/view-notes");
};

exports.getViewNote = (req, res, next) => {
  Note.fetchAll((notes) => {
    res.render("view-notes.ejs", {
      notes,
      pageTitle: "View notes",
      path: "/view-notes",
    });
  });
};
