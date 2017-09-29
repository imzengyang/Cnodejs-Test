let ui = require('../../config/uiconfig/indexpage')
let registerPage = require('../../config/uiconfig/registerPage')
let loginPage = require('../../config/uiconfig/loginPage')
let userinfo = require('../../config/userinfo.json')
let app = require('../../config/app.confifg');


let userLogin = async function(driver,userName,passWord){
    await driver.get(app.baseUrl);
    await driver.findElement(ui.loginhref).click();
    await driver.findElement(loginPage.username).sendKeys(userName);
    await driver.findElement(loginPage.password).sendKeys(passWord);
    await driver.findElement(loginPage.submit).click();
}

let userRegister = async function (driver,loginname,pass,re_pass,email){
    await driver.get(app.baseUrl)
    await driver.findElement(registerPage.registerUrl).click();
    await driver.findElement(registerPage.loginName).sendKeys(loginname);
    await driver.findElement(registerPage.pass).sendKeys(pass);
    await driver.findElement(registerPage.rePass).sendKeys(re_pass);
    await driver.findElement(registerPage.email).sendKeys(email);
    await driver.findElement(registerPage.sudmit).click();
}

module.exports.userLogin = userLogin;
module.exports.userRegister = userRegister;
