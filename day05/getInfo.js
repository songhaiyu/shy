const fs = require("fs");
const p =new Promise((resolve, reject) => {
    fs.readFile('./为学.md',(err,data)=>{
        if (err) reject(err);
        resolve(data);
    })
})
p.then(function(value){
    console.log(value.toString());
},function(reason) {
    console.log('失败');
})


// const fs = require("fs");
// const p =new Promise((resolve, reject) => {
//     fs.readFile('./为学.md',(err,data)=>{
//         if (err) reject(err);
//         resolve(data);
//     })
// })
// p.then(function(value){
//     console.log(value.toString());
// },function(reason) {
//     console.log('失败');
// })


// const fs = require("fs");
// const p =new Promise((resolve, reject) => {
//     fs.readFile('./为学.md',(err,data)=>{
//         if (err) reject(err);
//         resolve(data);
//     })
// })
// p.then(function(value){
//     console.log(value.toString());
// },function(reason) {
//     console.log('失败');
// })