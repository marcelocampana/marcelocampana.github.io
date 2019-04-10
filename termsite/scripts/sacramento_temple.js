var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);

            document.getElementById("title_temple_sac").innerHTML = myArr.temple.name[0];
   
            }
        }
        xmlhttp.open("GET", "https://marcelocampana.github.io/termsite/json/temples.json", true);
        xmlhttp.send();