module.exports = function (){
    var currentUtcTime = new Date(); // This is in UTC
    var thTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }));
    var days = new Array('อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์')
    var day = thTimeZone.getDay()
    return{
        day : thTimeZone.getDay(),
        days : days[day],
        d : thTimeZone.getDate(),
        month : thTimeZone.getMonth(),
        year : thTimeZone.getFullYear(),
        h : thTimeZone.getHours(),
        m : thTimeZone.getMinutes(),  
        s : thTimeZone.getSeconds()

         }
    }
