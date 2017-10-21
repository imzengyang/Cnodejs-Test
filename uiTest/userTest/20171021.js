

let uiAction = require('../../common/ui/uiaction')

require("chromedriver")
var assert = require('assert');

var { Builder } = require('selenium-webdriver');
let {until} = require('selenium-webdriver');
let testdata = require('../../testdata/login.json');

let userinfo_success = testdata.userinfo_success;
let userinfo_err = testdata.userinfo_err;
let loginPage = require('../../config/uiconfig/loginPage')
let indexPage = require('../../config/uiconfig/indexPage')


describe("Alter getText",function(){
    this.timeout(60*1000);

    before('open browser', function () {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
    })

    afterEach('tackscreenshot', async function () {
        // await uiAction.saveScreenShots(driver);
        // await driver.manage().deleteAllCookies();
    })

    after(' close browser', async function () {
        // return await driver.quit();
    })

    it("login delete a topic will display the alert window",async function(){
        await uiAction.userLogin(driver, "imzack","123456");
        driver.get("http://118.31.19.120:3000/topic/59e6140208639c93065d6cfb");
        await driver.sleep(2000)
        await driver.findElement({css:".fa.fa-lg.fa-trash"}).click();
        await driver.sleep(2000)
        let alert = await driver.switchTo().alert();
        console.log("the alert text is:",await alert.getText());
    })

    it.only("发布帖子",async function(){
        await uiAction.userLogin(driver, "imzack","123456");
        await driver.get("http://118.31.19.120:3000/topic/create");
        let postContent = {
            tab:"ask",
            title: "helloworld",
            content:"123456789"
        }

        await uiAction.postATopic(driver,postContent.tab,postContent.title,postContent.content);
    })
})