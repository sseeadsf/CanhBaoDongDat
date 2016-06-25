var canvasz = document.getElementById("circlez");
var valuez = document.getElementById("valuez");
var contextz = canvasz.getContext("2d");
var value3 = 0;
contextz.beginPath();
contextz.moveTo(canvasz.width / 2, canvasz.height / 2);
contextz.lineTo(canvasz.width, canvasz.height / 2);
contextz.stroke();
circle();
function circle() {
    contextz.beginPath();
    contextz.arc(canvasz.width / 2, canvasz.height / 2, canvasz.height / 2, 0, 2 * Math.PI);
    contextz.stroke();
}

function refresh() {
    contextz.clearRect(0, 0, canvasz.width, canvasz.height);
    contextz.translate(canvasz.width / 2, canvasz.height / 2);
    contextz.rotate(-value3 * Math.PI / 180);
    contextz.translate(-canvasz.width / 2, -canvasz.height / 2);
    contextz.fillRect(canvasz.width / 2, canvasz.width / 2, canvasz.width / 2, canvasz.height / 200);
    circle();
}

function rotate(degree3) {
    refresh();
    contextz.clearRect(0, 0, canvasz.width, canvasz.height);
    contextz.translate(canvasz.width / 2, canvasz.height / 2);
    contextz.rotate(degree3 * Math.PI / 180);
    value3 = degree3;
    contextz.translate(-canvasz.width / 2, -canvasz.height / 2);
    contextz.fillRect(canvasz.width / 2, canvasz.width / 2, canvasz.width / 2, canvasz.height / 200);
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
            var count = 2;
            setInterval(function () {
                rotate(lineArr[count]);
                valuez.value = lineArr[count];
                console.log(value3+"\n");
                count = count+3;
            }, 1000)
        }
    }
    xmlhttp.open("GET", "text.txt");
    xmlhttp.send();
}



