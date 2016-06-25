var canvasy = document.getElementById("circley");
var valuey = document.getElementById("valuey");
var contexty = canvasy.getContext("2d");
var value2 = 0;
contexty.beginPath();
contexty.moveTo(canvasy.width / 2, canvasy.height / 2);
contexty.lineTo(canvasy.width, canvasy.height / 2);
contexty.stroke();
circle();
function circle() {
    contexty.beginPath();
    contexty.arc(canvasy.width / 2, canvasy.height / 2, canvasy.height / 2, 0, 2 * Math.PI);
    contexty.stroke();
}

function refresh() {
    contexty.clearRect(0, 0, canvasy.width, canvasy.height);
    contexty.translate(canvasy.width / 2, canvasy.height / 2);
    contexty.rotate(-value2 * Math.PI / 180);
    contexty.translate(-canvasy.width / 2, -canvasy.height / 2);
    contexty.fillRect(canvasy.width / 2, canvasy.width / 2, canvasy.width / 2, canvasy.height / 200);
    circle();
}

function rotate(degree2) {
    refresh();
    contexty.clearRect(0, 0, canvasy.width, canvasy.height);
    contexty.translate(canvasy.width / 2, canvasy.height / 2);
    contexty.rotate(degree2 * Math.PI / 180);
    value2 = degree2;
    contexty.translate(-canvasy.width / 2, -canvasy.height / 2);
    contexty.fillRect(canvasy.width / 2, canvasy.width / 2, canvasy.width / 2, canvasy.height / 200);
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
            var count = 1;
            setInterval(function () {
                rotate(lineArr[count]);
                valuey.value = lineArr[count];
                console.log(value2+"\n");
                count = count+3;
            }, 1000)
        }
    }
    xmlhttp.open("GET", "text.txt");
    xmlhttp.send();
}



