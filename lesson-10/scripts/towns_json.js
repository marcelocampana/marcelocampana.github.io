var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);

            document.getElementById("name0").innerHTML = myArr.towns[0].name;
            document.getElementById("motto0").innerHTML = myArr.towns[0].motto;
            document.getElementById("yearFounded0").innerHTML = myArr.towns[0].yearFounded;
            document.getElementById("currentPopulation0").innerHTML = myArr.towns[0].currentPopulation;
            document.getElementById("averageRainfall0").innerHTML = myArr.towns[0].averageRainfall;

            document.getElementById("name1").innerHTML = myArr.towns[2].name;
            document.getElementById("motto1").innerHTML = myArr.towns[2].motto;
            document.getElementById("yearFounded1").innerHTML = myArr.towns[2].yearFounded;
            document.getElementById("currentPopulation1").innerHTML = myArr.towns[2].currentPopulation;
            document.getElementById("averageRainfall1").innerHTML = myArr.towns[2].averageRainfall;

            document.getElementById("name2").innerHTML = myArr.towns[6].name;
            document.getElementById("motto2").innerHTML = myArr.towns[6].motto;
            document.getElementById("yearFounded2").innerHTML = myArr.towns[6].yearFounded;
            document.getElementById("currentPopulation2").innerHTML = myArr.towns[6].currentPopulation;
            document.getElementById("averageRainfall2").innerHTML = myArr.towns[6].averageRainfall;

            document.getElementById("event1").innerHTML = myArr.towns[4].events[0];
            document.getElementById("event2").innerHTML = myArr.towns[4].events[1];
            document.getElementById("event3").innerHTML = myArr.towns[4].events[2];
            
            }
        }
        xmlhttp.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);
        xmlhttp.send();