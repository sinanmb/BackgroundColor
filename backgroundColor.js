
var interval = 1000;
var colorUsedList = [];

var changingColors = window.setInterval(changeBackgroundColor, interval);

function changeBackgroundColor(){
    var colorCode;
    do {
        colorCode = Math.floor(Math.random() * 1000000 + 1);
    }
    while (colorUsedList.indexOf(colorCode) >= 0);
    
    document.body.style.background = "#"+colorCode;
    colorUsedList.push(colorCode);
    
    if (colorUsedList.length == 10) {
        clearInterval(changingColors);
    }
}