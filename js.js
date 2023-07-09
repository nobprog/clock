document.addEventListener('DOMContentLoaded', CLOCK);

function set(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function CLOCK() {

let day = new Date();
let hour = set(day.getHours());
let min = set(day.getMinutes());
let sec = set(day.getSeconds());
let year = day.getFullYear();
let mon = set(day.getMonth() + 1);
let date = set(day.getDate());
let clockmsg = hour + ":" + min + " " + sec;
let calendar = year + "/" + mon + "/" + date;
document.getElementById("clock").innerHTML = clockmsg;
document.getElementById("day").innerHTML = calendar;

}
setInterval('CLOCK()',100);