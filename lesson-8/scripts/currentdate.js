var today = new Date();

var yyyy = today.getFullYear();
var nd = today.getDate();

if(nd<10) {
    nd = '0'+ nd;
} 


var mm;
    switch (today.getMonth()) {
        case 0:
          mm = "January";
          break;
        case 1:
          mm = "February";
          break;
        case 2:
          mm = "March";
          break;
        case 3:
          mm = "April";
          break;
        case 4:
          mm = "May";
          break;
        case 5:
          mm = "June";
          break;
        case 6:
          mm = "July";
          break;  
        case 7:
          mm = "August";
        case 8:
          mm = "September";
          break;
        case 9:
          mm = "October";
          break;
        case 10:
          mm = "November";
          break;
        case 11:
          mm = "December";
          break;
     
      }
 

var dd;

    switch (today.getDay()) {
        case 0:
        dd = "Sunday";
        break;
        case 1:
        dd = "Monday";
        break;
        case 2:
        dd = "Tuesday";
        break;
        case 3:
        dd = "Wednesday";
        break;
        case 4:
        dd = "Thursday";
        break;
        case 5:
        dd = "Friday";
        break;
        case 6:
        dd = "Saturday";
    }


today = dd + ', ' + nd + ' ' + mm + ' ' + yyyy;
document.getElementById('outputPg').innerHTML = today; 
