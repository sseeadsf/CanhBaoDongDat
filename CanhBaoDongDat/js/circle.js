var canvasx = document.getElementById("circlex");
var valuex = document.getElementById("valuex");
var contextx = canvasx.getContext("2d");
var value1 = 0;
contextx.beginPath();
contextx.moveTo(canvasx.width / 2, canvasx.height / 2);
contextx.lineTo(canvasx.width, canvasx.height / 2);
contextx.stroke();
circle();
function circle() {
    contextx.beginPath();
    contextx.arc(canvasx.width / 2, canvasx.height / 2, canvasx.height / 2, 0, 2 * Math.PI);
    contextx.stroke();
}

function refresh() {
    contextx.clearRect(0, 0, canvasx.width, canvasx.height);
    contextx.translate(canvasx.width / 2, canvasx.height / 2);
    contextx.rotate(-value1 * Math.PI / 180);
    contextx.translate(-canvasx.width / 2, -canvasx.height / 2);
    contextx.fillRect(canvasx.width / 2, canvasx.width / 2, canvasx.width / 2, canvasx.height / 200);
    circle();
}

function rotate(degree1) {
    console.log("begin rotate x");
    refresh();
    contextx.clearRect(0, 0, canvasx.width, canvasx.height);
    contextx.translate(canvasx.width / 2, canvasx.height / 2);
    contextx.rotate(degree1 * Math.PI / 180);
    value1 = degree1;
    contextx.translate(-canvasx.width / 2, -canvasx.height / 2);
    contextx.fillRect(canvasx.width / 2, canvasx.width / 2, canvasx.width / 2, canvasx.height / 200);
    console.log("rotate complete");
    circle();
}
getData()
function getData() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            var lines = xmlhttp.responseText;
            var lineArr = lines.split('\n');
            var count = 0;
            setInterval(function () {
                rotate(lineArr[count]);
                valuex.value = lineArr[count];
                console.log(value1 + "\n");
                count = count + 3;
            }, 1000);
        }
    }
    xmlhttp.open("GET", "text.txt");
    xmlhttp.send();
}



