var request = require('request')
const thtime = require("./thtime")
var TOKEN = process.env.BOT_TOKEN1

setInterval(() => alert(), 10000);

function alert() {
    var h = thtime().h
    var m = thtime().m
    var s = thtime().s
    var day = thtime().day
    var days = thtime().days
    
    /**แต่งเวลาให้สวย */
    if (h < 10) {
    h = "0" + h;
    }
    if (m < 10) {
    m = "0" + m;
    }
    if (s < 10) {
    s = "0" + s;
    }
    
    var msgz1 = 'อีก 15 นาที บอสเกิดแล้ว \n** '+days+' : เวลา '+h+':'+m+' น. **'
    var msgz2 = 'บอสโลกเกิดแล้ว \n** '+days+' : เวลา '+h+':'+m+' น. **'
    var msgz3 = 'กิจกรรมลอกข้อสอบกิล \n** '+days+' : เวลา '+h+':'+m+' น. **' 

    if (h == 10 && m == 33 && s <= 10) {            //เวลา
         sendText(msgz1)                            //อีก 15 นาที บอสเกิดแล้ว
        }    

    if (h == 10 && m == 30 && s <= 10) {
         sendText(msgz2)                            //บอสโลกเกิดแล้ว
        }

    if (day == 1 && h == 10 && m == 31 && s <= 10) { 
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
