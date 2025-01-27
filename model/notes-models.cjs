const fs = require("fs");
const p = require("path");

const dayStates = [];
class Note {
  constructor(day) {
    this.state = day;
  }

  save() {
    fs.readFile(
      p.join(p.dirname(require.main.filename), "data", "notes.json"),
      (err, contentFile) => {
        if (err) {
          dayStates.push(this.state);
        } else {
          const data = JSON.parse(contentFile);
          data.push(this.state);
          data.map((item) => {
            dayStates.push(item);
          });
        }
        fs.writeFile(
          p.join(p.dirname(require.main.filename), "data", "notes.json"),
          JSON.stringify(dayStates),
          (err) => {}
        );
      }
    );
  }

  static fetchAll(cb) {
    fs.readFile(
      p.join(p.dirname(require.main.filename), "data", "notes.json"),
      (err, fileContent) => {
        let parsedData;
        if (err) {
          parsedData = [];
        } else {
          parsedData = JSON.parse(fileContent);
        }
        cb(parsedData);
      }
    );
  }
}

module.exports = Note;
