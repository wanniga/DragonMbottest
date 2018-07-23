var request = require('request')
const thtime = require("./thtime")

var TOKEN = process.env.BOT_TOKEN1

setInterval(() => timechk(), 10000);

function timechk() {
    aler1()
    aler2()
    aler3()
}

function aler1() {
    var h = thtime().h
    var m = thtime().m
    var s = thtime().s
    var day = thtime().day

    if (h == 09 && m == 51 && s <= 10) { sendText() }        //แจ้งเตือนตอนเวลา 17.00 น
    if (h == 09 && m == 52 && s <= 10) { sendText15() }     //แจ้งเตือนตอนเวลา 16.45 น
    if (day == 1 && h == 09 && m == 53 && s <= 10) { sendText1() //
}
function sendText() {
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            bearer: TOKEN, //token
        },
        form: {
            message: 'บอสโลกเกิดจ้าาาาาา !!!', //ข้อความที่จะส่ง
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
        } else {
            console.log(body)
        }
    })
}

function sendText15() {
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            bearer: TOKEN, //token
        },
        form: {
            message: 'อีก 15 นาที บอสโลกจะเกิดแล้วนะ !!!', //ข้อความที่จะส่ง
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
        } else {
            console.log(body)
        }
    })
}

function sendText1() {
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            bearer: TOKEN, //token
        },
        form: {
            message: 'กิจกรรมลอกข้อสอบกิล !!!', //ข้อความที่จะส่ง
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
        } else {
            console.log(body)
        }
    })
}
