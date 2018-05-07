const people = require("../controllers/people");
module.exports = function(app) {
    app.get("/", people.index);
    app.get("/new/:name", people.create);
    app.get("/remove/:name", people.delete);
    app.get("/:name", people.show);
}