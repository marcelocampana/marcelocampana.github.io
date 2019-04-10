var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);

            document.getElementById("title_temple_sac").innerHTML = myArr.temple[0].name;
   
            }
        }
        xmlhttp.open("GET", "https://marcelocampana.github.io/termsite/json/pp.json", true);
        xmlhttp.send();