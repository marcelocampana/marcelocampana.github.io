var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);

            document.getElementById("Name_temple_ang").innerHTML = myArr.temple[2].Name;
            document.getElementById("Name_temple_sac_btn").innerHTML = myArr.temple[0].Name;
            document.getElementById("Name_temple_fre_btn").innerHTML = myArr.temple[1].Name;
            document.getElementById("Name_temple_ang_btn").innerHTML = myArr.temple[2].Name;
            document.getElementById("Name_temple_new_btn").innerHTML = myArr.temple[3].Name;
            document.getElementById("Address_temple_ang").innerHTML = myArr.temple[2].Address;
            document.getElementById("Telephone_temple_ang").innerHTML = myArr.temple[2].Telephone;
            document.getElementById("Services1_temple_ang").innerHTML = myArr.temple[2].Services[0];
            document.getElementById("Services2_temple_ang").innerHTML = myArr.temple[2].Services[1];
            document.getElementById("Services3_temple_ang").innerHTML = myArr.temple[2].Services[2];
            document.getElementById("Services4_temple_ang").innerHTML = myArr.temple[2].Services[3];
            document.getElementById("Baptistry_Schedule1_temple_ang").innerHTML = myArr.temple[2].Baptistry_Schedule[0];
            document.getElementById("Baptistry_Schedule2_temple_ang").innerHTML = myArr.temple[2].Baptistry_Schedule[1];
            document.getElementById("Endowment_Schedule1_temple_ang").innerHTML = myArr.temple[2].Endowment_Schedule[0];
            document.getElementById("Endowment_Schedule2_temple_ang").innerHTML = myArr.temple[2].Endowment_Schedule[1];
            document.getElementById("Endowment_Schedule3_temple_ang").innerHTML = myArr.temple[2].Endowment_Schedule[2];
            document.getElementById("Endowment_Schedule4_temple_ang").innerHTML = myArr.temple[2].Endowment_Schedule[3];
            document.getElementById("Temple_Closures1_temple_ang").innerHTML = myArr.temple[2].Temple_Closures[0];
            document.getElementById("Temple_Closures2_temple_ang").innerHTML = myArr.temple[2].Temple_Closures[1];
            document.getElementById("Temple_Closures3_temple_ang").innerHTML = myArr.temple[2].Temple_Closures[2];
            document.getElementById("Temple_Closures4_temple_ang").innerHTML = myArr.temple[2].Temple_Closures[3];
            document.getElementById("Temple_Closures5_temple_ang").innerHTML = myArr.temple[2].Temple_Closures[4];
            document.getElementById("Temple_Closures6_temple_ang").innerHTML = myArr.temple[2].Temple_Closures[5];
            document.getElementById("Milestones1_temple_ang").innerHTML = myArr.temple[2].Milestones[0];
            document.getElementById("Milestones2_temple_ang").innerHTML = myArr.temple[2].Milestones[1];
            document.getElementById("Milestones3_temple_ang").innerHTML = myArr.temple[2].Milestones[2];

           

   
            }
        }
        xmlhttp.open("GET", "https://marcelocampana.github.io/termproject/json/pp.json", true);
        xmlhttp.send();