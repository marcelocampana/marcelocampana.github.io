var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);

            document.getElementById("Name_temple_sac").innerHTML = myArr.temple[0].Name;
            document.getElementById("Address_temple_sac").innerHTML = myArr.temple[0].Address;
            document.getElementById("Telephone_temple_sac").innerHTML = myArr.temple[0].Telephone;
            document.getElementById("Services1_temple_sac").innerHTML = myArr.temple[0].Services[0];
            document.getElementById("Services2_temple_sac").innerHTML = myArr.temple[0].Services[1];
            document.getElementById("Services3_temple_sac").innerHTML = myArr.temple[0].Services[2];
            document.getElementById("Services4_temple_sac").innerHTML = myArr.temple[0].Services[3];
            document.getElementById("Baptistry_Schedule1_temple_sac").innerHTML = myArr.temple[0].Baptistry_Schedule[0];
            document.getElementById("Baptistry_Schedule2_temple_sac").innerHTML = myArr.temple[0].Baptistry_Schedule[1];

           

   
            }
        }
        xmlhttp.open("GET", "https://marcelocampana.github.io/termsite/json/pp.json", true);
        xmlhttp.send();