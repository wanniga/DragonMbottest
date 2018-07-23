var request = require('request')
const thtime = require("./thtime")
var TOKEN = process.env.BOT_TOKEN1

setInterval(() => alert(), 10000);

function alert() {
    var h = thtime().h
    var m = thtime().m
    var s = thtime().s
    var day = thtime().day
    var msgz1 = 'อีก 15 นาที บอสเกิดแล้ว'
    var msgz2 = 'บอสโลกเกิดแล้ว'
    var msgz3 = 'กิจกรรมลอกข้อสอบกิล :'+day+' '+h+': '+m+' น.' 

    if (h == 12 && m == 15 && s <= 10) {            //เวลา
         sendText(msgz1)                            //อีก 15 นาที บอสเกิดแล้ว
        }    

    if (h == 09 && m == 58 && s <= 10) {
         sendText(msgz2)                            //บอสโลกเกิดแล้ว
        }

    if (day == 1 && h == 10 && m == 10 && s <= 10) { 
        sendText(msgz3)                             //ลอกข้อสอบ
    }  
}

function sendText(msgz) {
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
            message: msgz, //ข้อความที่จะส่ง
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
        } else {
            console.log(body)
        }
    })
}
