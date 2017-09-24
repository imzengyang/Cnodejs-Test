
let uiaction = require('../../common/ui/uiation')

require ("chromedriver")
var assert = require('assert');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe('用户登录',function(){

    this.timeout(600000)
    it('用户登录',async function(){
        await uiaction.userlogin(driver)
    })
})