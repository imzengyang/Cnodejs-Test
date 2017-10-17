/**
 * 用户登录 功能测试
 * 测试点：正确的用户和错误的用户登录 应该看到不同的登录结果
 * 
 * 1. 正确输入用户名和密码
 * 2. 输入错误的用户名和密码
 * 2.1 用户名正确 密码错误 收到错误提示
 * 2.2 用户名错误 密码正确 收到错误提示
 * 2.3 用户名 空  密码正确 
 * 2.4 用户名 空 密码错误 
 * 2.5 用户名错误  密码空  
 * 2.6 用户名正确  密码空
 * 2.7 用户名 空 密码空
 * 
 * 
 * tip：正确的用户名为 imzack 密码123456
 */





let uiAction = require('../../common/ui/uiaction')

require("chromedriver")
var assert = require('assert');
var { Builder } = require('selenium-webdriver');
let testdata = require('../../testdata/login.json');

let userinfo_success = testdata.userinfo_success;
let userinfo_err = testdata.userinfo_err;
let loginPage = require('../../config/uiconfig/loginPage')
let indexPage = require('../../config/uiconfig/indexPage')

let driver;
describe('用户登录', function () {
    this.timeout(60*1000)
    before('open browser', function () {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
    })

    afterEach('tackscreenshot', async function () {
        await uiAction.saveScreenShots(driver);
        await driver.manage().deleteAllCookies();
    })

    after(' close browser', async function () {
        return await driver.quit();
    })
    it('用户登录-用户名密码正确的情况', async function () {
        for (let i = 0; i < userinfo_success.length; i++) {
            await uiAction.userLogin(driver, userinfo_success[i].username, userinfo_success[i].password);
            //登录成功后加断言
            let UserName = await driver.findElement(indexPage.username).getText();
            return assert.deepEqual(userinfo_success[i].username,UserName);
        }
    })

    it("用户登录-用户名密码错误的情况",async function(){
        for (let i=0; i< userinfo_err.length;i++){
            await uiAction.userLogin(driver,userinfo_err[i].username,userinfo_err[i].password)
            //错误信息提示断言
            let errTip = await driver.findElement(loginPage.errortip).getText();
            
            assert.ok(errTip.indexOf(userinfo_err[i].errortip) > -1)
        }
    })
})