let ui = require('../../config/uiconfig/indexpage')
let userinfo = require('../../config/userinfo.json')

let userlogin = async function(driver){
    await driver.get("http://localhost:3000");
    await driver.findElement(ui.loginhref).click();

}

module.expots = userlogin;