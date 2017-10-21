// let data = require('./testdata/register.json')
// console.log(data.emailerrData.userName);


require('chromedriver')
let { Builder } = require('selenium-webdriver')

let uiaction = require("./common/ui/uiaction")
let assert = require("assert")

driver = new Builder().forBrowser('chrome').build();
driver.manage().window().maximize();

let testGetText = async function (driver, username, password) {
    await uiaction.userLogin(driver, username, password);
    await driver.get("http://118.31.19.120:3000/topic/create");
    let alltext = await driver.findElements({ css: "#tab-value > option" })
    let arr = [];
    for (let option of alltext) {
        let optionName = await option.getText();
        console.log(optionName)
        arr.push(optionName);
    }
    console.log(alltext.length)

    let actual = ["请选择", "分享", "问答", "招聘"]
    assert.deepEqual(actual, arr)
}

// testGetText(driver,"imzack","123456");
var MongoClient = require('mongodb').MongoClient
let db = async function () {
    MongoClient.connect("mongodb://118.31.19.120:27017/node_club_dev", function (err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        
    })
}

db()