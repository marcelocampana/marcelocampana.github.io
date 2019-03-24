var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            
            document.getElementById("event1").innerHTML = myArr.towns[1].events[0];
            document.getElementById("event2").innerHTML = myArr.towns[1].events[1];
            document.getElementById("event3").innerHTML = myArr.towns[1].events[2];
            document.getElementById("event4").innerHTML = myArr.towns[1].events[3];
            
            }
        }
        xmlhttp.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);
        xmlhttp.send();