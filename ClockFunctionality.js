
var hr = document.getElementById("hour");
var mint = document.getElementById("Mint");
var sec = document.getElementById("sec");

function displayTime()
{
    var date = new Date();
               

    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss= date.getSeconds();

    var hRotate = 30*hh + mm/2;
    var mRotate = 6*mm;
    var sRotate = 6*ss;

    hr.style.transform = `rotate(${hRotate}deg)`;
    mint.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;
//requestAnimationFrame(displayTime)
}
//requestAnimationFrame(displayTime)
setInterval(displayTime,1000);