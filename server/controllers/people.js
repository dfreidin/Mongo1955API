const mongoose = require("mongoose");
Person = mongoose.model("Person");
module.exports = {
    index: function(req, res) {
        Person.find({}, function(err, people){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success", data: people});
            }
        });
    },
    create: function(req, res) {
        var person = new Person();
        person.name = req.params.name;
        person.save(function(err){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.redirect("/"+person.name);
            }
        });
    },
    delete: function(req, res) {
        Person.remove({name: req.params.name}, function(err){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.redirect("/");
            }
        })
    },
    show: function(req, res) {
        Person.findOne({name: req.params.name}, function(err, person){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success", data: person});
            }
        })

    }
}