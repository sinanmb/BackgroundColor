

function changeBackgroundColor(){
    var hexValues = '0123456789abcdef';
    var colorCode;
    do {
        colorCode = hexValues.split('').map(function(v, i, a){
            return i > 5 ? null : a[Math.floor(Math.random() * 16)]
        }).join('');
    }
    while (this.colorUsedList.indexOf(colorCode) >= 0);
    
    document.body.style.background = "#"+colorCode;
    this.colorUsedList.push(colorCode);
}

function startColorChange (interval, duration) {
    this.colorUsedList = [];
    this.changeBackgroundColor = changeBackgroundColor.bind(this);
    var changingColors = window.setInterval(this.changeBackgroundColor, interval);
    setTimeout(clearInterval.bind(null, changingColors), duration)
}

startColorChange(1000, 10500);