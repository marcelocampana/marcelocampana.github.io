var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);

            document.getElementById("name0").innerHTML = myArr.towns[4].name;
            document.getElementById("motto0").innerHTML = myArr.towns[4].motto;
            document.getElementById("yearFounded0").innerHTML = myArr.towns[4].yearFounded;
            document.getElementById("currentPopulation0").innerHTML = myArr.towns[4].currentPopulation;
            document.getElementById("averageRainfall0").innerHTML = myArr.towns[4].averageRainfall;

            document.getElementById("name1").innerHTML = myArr.towns[5].name;
            document.getElementById("motto1").innerHTML = myArr.towns[5].motto;
            document.getElementById("yearFounded1").innerHTML = myArr.towns[5].yearFounded;
            document.getElementById("currentPopulation1").innerHTML = myArr.towns[5].currentPopulation;
            document.getElementById("averageRainfall1").innerHTML = myArr.towns[5].averageRainfall;

            document.getElementById("name2").innerHTML = myArr.towns[1].name;
            document.getElementById("motto2").innerHTML = myArr.towns[1].motto;
            document.getElementById("yearFounded2").innerHTML = myArr.towns[1].yearFounded;
            document.getElementById("currentPopulation2").innerHTML = myArr.towns[1].currentPopulation;
            document.getElementById("averageRainfall2").innerHTML = myArr.towns[1].averageRainfall;

            
            }
        }
        xmlhttp.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);
        xmlhttp.send();