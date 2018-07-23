var request = require('request')
const thtime = require("./thtime")

var TOKEN = process.env.BOT_TOKEN1

setInterval(() => timechk(), 10000);

function timechk() {
    aler1()
    aler2()
}

function aler1() {
    var h = thtime().h
    var m = thtime().m
    var s = thtime().s
   // var days = thtime().days

    // if (m ==  && s <= 10) { sendText() }                   //แก้เวลาตรงนี้ สำหรับข้อความ "บอสโลกเกิดแล้ว"  แจ้งเตือน .00 น
    if (h == 08 && m == 48 && s <= 10) { sendText() }        //แจ้งเตือนตอนเวลา 17.00 น

}

function aler2() {
    var h = thtime().h
    var m = thtime().m
    var s = thtime().s

    // if (m == 42 && s <= 10) { sendText15() }                //แก้เวลาตรงนี้ สำหรับข้อความ "อีก 15 บอสโลกเกิด"   แจ้งเตือน .45 น
    if (h == 08 && m == 32 && s <= 10) { sendText15() }     //แจ้งเตือนตอนเวลา 16.45 น

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
