var studentList = [ //学生数据
    {
        "id": 1,
        "name": "张世权",
        "sex": 0
    },
    {
        "id": 2,
        "name": "吴倩",
        "sex": 1
    },
    {
        "id": 3,
        "name": "李宏恩",
        "sex": 0
    },
    {
        "id": 4,
        "name": "宋增杰",
        "sex": 0
    },
    {
        "id": 5,
        "name": "杨志豪",
        "sex": 0
    },
    {
        "id": 6,
        "name": "郝嫚嫚",
        "sex": 1
    },
    {
        "id": 7,
        "name": "侯建荞",
        "sex": 1
    },
    {
        "id": 8,
        "name": "程怀博",
        "sex": 0
    },
    {
        "id": 9,
        "name": "江萌洋",
        "sex": 1
    },
    {
        "id": 10,
        "name": "周璇",
        "sex": 1
    },
    {
        "id": 11,
        "name": "张建雨",
        "sex": 0
    },
    {
        "id": 12,
        "name": "孙铭",
        "sex": 0
    },
    {
        "id": 13,
        "name": "孙旭瑶",
        "sex": 1
    },
    {
        "id": 14,
        "name": "章奥博",
        "sex": 0
    },
    {
        "id": 15,
        "name": "王伟宸",
        "sex": 0
    },
    {
        "id": 16,
        "name": "代伊涵",
        "sex": 0
    },
    {
        "id": 17,
        "name": "邓林科",
        "sex": 0
    },
    {
        "id": 18,
        "name": "张立",
        "sex": 0
    },
    {
        "id": 19,
        "name": "李妍",
        "sex": 1
    },
    {
        "id": 20,
        "name": "薛翔元",
        "sex": 0
    },
    {
        "id": 21,
        "name": "郑锋",
        "sex": 0
    },
    {
        "id": 22,
        "name": "巴钦",
        "sex": 0
    },
    {
        "id": 23,
        "name": "张宗耀",
        "sex": 0
    },
    {
        "id": 24,
        "name": "章涵语",
        "sex": 0
    },
    {
        "id": 25,
        "name": "高鹏亚",
        "sex": 0
    },
    {
        "id": 26,
        "name": "付高聪",
        "sex": 0
    },
    {
        "id": 27,
        "name": "宋海宇",
        "sex": 0
    },
    {
        "id": 28,
        "name": "王龙翔",
        "sex": 0
    },
    {
        "id": 29,
        "name": "徐婉颖",
        "sex": 1
    },
    {
        "id": 30,
        "name": "韩雨泽",
        "sex": 0
    },
    {
        "id": 31,
        "name": "刘艺",
        "sex": 1
    }
]
var time = document.querySelector('.time')//放时间的标签
var li = document.querySelector('li') //获取li
var ul = document.querySelector('ul') //获取ul
var opc = document.querySelector('.opc') //随机成员
var solo = document.querySelector(".btn button:nth-of-type(1)");//单人按钮
var double = document.querySelector(".btn button:nth-of-type(2)");//双人按钮
var boy = document.querySelector(".btn button:nth-of-type(3)");//男生按钮
var girls = document.querySelector(".btn button:nth-of-type(4)");//女孩按钮
var boyList = [] //男生数据
var girlsList = [] //女生数据
function getBoy() {// 男生的数据过滤出来
    boyList = studentList.filter(ele => {
        return ele.sex == 0
    })
}
getBoy() //调用获取男生数据
function getGirl() {// 女生的数据过滤出来
    girlsList = studentList.filter(ele => {
        return ele.sex == 1
    })
}
getGirl() //调用获取女生数据
function getTime() { //时间补零
    var data = new Date();
    let year = data.getFullYear();
    let month = data.getMonth();
    month = month < 10 ? '0' + month : month;
    let day = data.getDate();
    day = day < 10 ? '0' + day : day;
    let hours = data.getHours()
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = data.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = data.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return year + '-' + month + '-' + day + " " + hours + ":" + minutes + ":" + seconds
}
getTime()
setInterval(function () {// 把时间插入到标签上 setInterval每隔多久执行一次
    time.innerHTML = '时间：' + getTime()
}, 1000)
function render() {// 页面渲染数据
    li.innerHTML = ''
    studentList.forEach(ele => {
        var div = document.createElement('div');
        div.innerHTML = `<span>${ele.name}</span>`
        div.style.backgroundImage = randomColor();
        li.appendChild(div)
    })
}
render() //调用渲染
function randomColor() {/**渐变颜色随机数 */
    var color = "-webkit-linear-gradient(right, rgb(".concat(randomParams(), "), rgb(").concat(randomParams(), "))");
    return color;
}
console.log(randomColor());
function randomParams() {/**rgb颜色随机数 */
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = + r + ',' + g + ',' + b;
    return rgb;
}
function Nonce(list) {//封装随机数
    var max = list
    var min = 0
    return Math.floor(Math.random() * (max - min) + min)
}
solo.onclick = function (e) {// 单人点名
    console.log(e.target.innerText);
    if (e.target.innerText == '停止点名') {
        solo.innerText = '单人点名'
        let index = Nonce(studentList.length)
        opc.innerText = studentList[index].name
        opc.style.backgroundImage = randomColor();

    } else {
        solo.innerText = '停止点名'
    }
}
double.onclick = function (e) {// 双人点名
    if (e.target.innerText == '停止点名') {
        double.innerText = '双人点名'
        let left = Nonce(studentList.length)
        let right = Nonce(studentList.length)
        opc.innerText = studentList[left].name + ' ' + studentList[right].name
        opc.style.backgroundImage = randomColor();

    } else {
        double.innerText = '停止点名'
    }
}
boy.onclick = function (e) {//男生点名
    if (e.target.innerText == '停止点名') {
        boy.innerText = '男生点名'
        let index = Nonce(boyList.length)
        opc.innerText = boyList[index].name
        opc.style.backgroundImage = randomColor();

    } else {
        boy.innerText = '停止点名'
    }
}
girls.onclick = function (e) {//女生点名
    if (e.target.innerText == '停止点名') {
        girls.innerText = '女生点名'
        let index = Nonce(girlsList.length)
        opc.innerText = girlsList[index].name
        opc.style.backgroundImage = randomColor();

    } else {
        girls.innerText = '停止点名'
    }
}