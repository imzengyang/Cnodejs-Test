

var MongoClient = require('mongodb').MongoClient
let assert = require('assert');
let url = 'mongodb://localhost:27017/node_club_dev1';


let activeUser = async function(user){
    new Promise((resovle,reject) => {
        MongoClient.connect(url, function (err, db) {
            if(err){
                reject(err);
            }
            assert.equal(null, err);
            console.log("Connected correctly to server");
            let collection = db.collection("users")
            // active user;
            
            console.log("will active the user",user)
            collection.updateOne({ name: `${user}` }, { $set: { "active": true } }, function (err, docs) {
                if(err){
                    reject(err)
                }
            })
            db.close(resovle); 
        });
        
    })
}



let test = async function () {
    let user = "15066908694761221";
    await activeUser(user);
}
test();

// module.exports.activeUser = activeUser;