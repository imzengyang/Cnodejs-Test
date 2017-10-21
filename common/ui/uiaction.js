let fs = require('fs');

let ui = require('../../config/uiconfig/indexpage')
let registerPage = require('../../config/uiconfig/registerPage')
let loginPage = require('../../config/uiconfig/loginPage')
let userinfo = require('../../config/userinfo.json')
let app = require('../../config/app.confifg');
let util = require('./util')

let userLogin = async function (driver, userName, passWord) {
    await driver.get(app.baseUrl);
    await driver.findElement(ui.loginhref).click();
    await driver.findElement(loginPage.username).sendKeys(userName);
    await driver.findElement(loginPage.password).sendKeys(passWord);
    await driver.findElement(loginPage.submit).click();
}

let userRegister = async function (driver, loginname, pass, re_pass, email) {
    await driver.get(app.baseUrl)
    await driver.findElement(registerPage.registerUrl).click();
    await driver.findElement(registerPage.loginName).sendKeys(loginname);
    await driver.findElement(registerPage.pass).sendKeys(pass);
    await driver.findElement(registerPage.rePass).sendKeys(re_pass);
    await driver.findElement(registerPage.email).sendKeys(email);
    await driver.findElement(registerPage.sudmit).click();
}

let saveScreenShots = async function (driver) {
    let screenshotdir = util.getScreenshotsDir();
    let imagedata = await driver.takeScreenshot();
    fs.writeFileSync(screenshotdir + "/" + new Date().valueOf() + ".png", imagedata, "base64");
}


let postATopic = async function (driver, tab, title, content) {

    // 我们约定 tab 为四个可选值
    /**
     * 1. seletc -- 请选择
     * 2. share --  分享
     * 3. ask -- 问答
     * 4. job -- 招聘
     */
    //选择tab
    tab = tab.toLowerCase();
    switch (tab) {
        case "select":
            await driver.findElement({ css: "#tab-value > option:nth-child(1)" }).click()
            break;
        case "share":
            await driver.findElement({ css: "#tab-value > option:nth-child(2)" }).click()
            break;
        case "ask":
            await driver.findElement({ css: "#tab-value > option:nth-child(3)" }).click();
            break;
        case "jod":
            await driver.findElement({ css: "#tab-value > option:nth-child(4)" }).click();
            break;
        default:
            break;
    }
    // title 输入
    await driver.findElement({id: "title"}).sendKeys(title);
    let contentEle = await driver.findElement({css:".CodeMirror-code"});
    await contentEle.click();
    await driver.actions().mouseMove(contentEle).sendKeys(content).perform();
}

module.exports.userLogin = userLogin;
module.exports.userRegister = userRegister;
module.exports.saveScreenShots = saveScreenShots;
module.exports.postATopic = postATopic;
