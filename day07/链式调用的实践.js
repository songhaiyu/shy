/****
 * 1.先用promise函数分别获取三个数据
 * 2.再用peomise函数实现链式调用
 */

const fs = require("fs");

function getPeach() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./桃花源记.md', (err, data) => {
            if (err) reject(err);
            resolve(data)
            // reject('桃园')
        })
    })
}

function getTroops() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./出师表.md', (err, data) => {
            if (err) reject(err);
            resolve(data)
            // reject('出师')

        })
    })
}
function getAgent() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./出居庸关.md', (err, data) => {
            if (err) reject(err);
            resolve(data)
            // reject('出居庸关')
        })
    })
}
// // getPeach().then(res => {
// //     console.log(res.toString());
// // }).then(() => {
// //     getTroops().then(res => {
// //         console.log(res.toString());
// //     })
// // }).then(() => {
// //     getAgent().then(res => {
// //         console.log(res.toString());
// //     })
// // })
// getPeach().then((res) => {
//     // console.log(res);
// }).catch((err) => {
//     console.log(err);
// }).then((res) => {
//     // console.log(res);
// }).catch((err) => {
//     console.log(err);
// }).then((res) => {
//     // console.log(res);
// }).catch((err) => {
//     console.log(err);
// })



// const promiseClick = () => {
//     console.log('点击方法被调用')
//     let p = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('执行完成Promise');
//             resolve('要返回的数据可以任何数据例如接口返回数据');
//         }, 2000);
//     });
//     return p
// }
// promiseClick()
//     .then(function (data) {
//         console.log(data);
//         return getTroops().toString();
//     })
//     .then(function (data) {
//         console.log(data);
//         return getAgent().toString();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

const promiseClick = () => {
    console.log('点击方法被调用')
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('执行完成Promise');
            resolve('要返回的数据可以任何数据例如接口返回数据');
        }, 2000);
    });
    return p
}
promiseClick()
    .then(function (data) {
        console.log(data);
        return getTroops().toString();
    })
    .then(function (data) {
        console.log(data);
        return getAgent().toString();
    })
    .then(function (data) {
        console.log(data);
    });