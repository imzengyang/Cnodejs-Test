

var MongoClient = require('mongodb').MongoClient
let assert = require('assert');
let app = require('../../config/app.confifg');


let activeUser = function (user, done) {
    MongoClient.connect(app.mongodbUrl, function (err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        let collection = db.collection("users")
        // active user;

        console.log("will active the user", user)
        collection.updateOne({ name: `${user}` }, { $set: { "active": true } }, function (err, docs) {
           console.log(err,docs.result)
        })
        db.close(done);
    });
}
module.exports.activeUser = activeUser;