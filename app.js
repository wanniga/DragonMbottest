var request = require('request')
const thtime = require("./thtime")
var TOKEN = process.env.BOT_TOKEN

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
    
    var msgz1 = 'เตรียมตัว15นาทีบอสจะเกิดแล้ว \n✿✿ เวลา '+h+':'+m+' น. ✿✿'
    var msgz2 = 'บอสโลกเกิดจ้าาา ลุยยย !! \n✿✿ เวลา '+h+':'+m+' น. ✿✿'
    var msgz3 = 'กิจกรรมลอกข้อสอบกิล \n✿✿ '+days+' : เวลา '+h+':'+m+' น. ✿✿' 
    var msgz4 = 'ถึงเวลาอัพเดทรอบ 11โมง \n（ˇ︿ˇ﹀ '
    

    if (h == 11 && m == 00 && s <= 10) { 
        sendText(msgz4)                             //อัพเดทเครื่อง POS
    } 
    if (h == 12 && m == 15 && s <= 10) {            //เวลา
         sendText(msgz1)                            //อีก 15 นาที บอสเกิดแล้ว
        }    

    if (h == 12 && m == 30 && s <= 10) {
         sendText(msgz2)                            //บอสโลกเกิดแล้ว
        }

    if (day == 1 && h == 19 && m == 30 && s <= 10) { 
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
