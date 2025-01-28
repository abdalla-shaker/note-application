const fs = require("fs");
const p = require("path");

const folderPath = p.join(
  p.dirname(require.main.filename),
  "data",
  "notes.json"
);

const getNotesData = (cb) => {
  fs.readFile(folderPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
class Note {
  constructor(day) {
    this.state = day;
  }

  save() {
    getNotesData((notes) => {
      notes.push(this.state);
      fs.writeFile(folderPath, JSON.stringify(notes), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getNotesData(cb);
  }
}

module.exports = Note;
