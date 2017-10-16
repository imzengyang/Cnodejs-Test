// require('chromedriver')
// let { Builder } = require('selenium-webdriver')
// let { until } = require('selenium-webdriver')
// let driver = new Builder().forBrowser('chrome').build();
// let assert = require('assert');

// let todo = async function () {
//     await driver.get("https://www.baidu.com/")
//     await driver.findElement({id:'kw'}).sendKeys("123456")
//     let input = await driver.findElements({id:'kw1'})
//     console.log(input.length)

//     // let isb = await until.elementLocated({id:'kw'})
//     // console.log(isb)
// }

// todo()


// let getrootPath = function (){
//     let rootpath = path.resolve(__dirname);
//     while (rootpath) {
//         if(fs.existsSync(rootpath+'/package.json')){
//             break;
//         }
//         rootpath = rootpath.substring(0,rootpath.lastIndexOf(path.sep));
//     }
//     return rootpath;
// }

let path = require('path')
let fs = require('fs')
let rootpath = path.resolve(__dirname);

while (rootpath) {
    if (fs.existsSync(rootpath + '/package.json')) {
        break;
    } 
    console.log("rootpath:", rootpath.lastIndexOf(path.sep), "path.sep",path.sep)
    rootpath = rootpath.substring(0, rootpath.lastIndexOf(path.sep));
    console.log("rootpath:",rootpath)
}


