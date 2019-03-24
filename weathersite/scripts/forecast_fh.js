var mDay= new Date();
var actualDay1 = (mDay.getDay())+1;
var actualDay2 = (mDay.getDay())+2;
var actualDay3 = (mDay.getDay())+3;
var actualDay4 = (mDay.getDay())+4;
var actualDay5 = (mDay.getDay())+5;
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



function actualMDay(nDay){
    if(nDay ==7){
        nDay=0;
    }
    else if (nDay ==8){
        nDay=1;
    }
    else if (nDay ==9){
        nDay=2;
    }
    else if (nDay ==10){
        nDay=3;
    }
    else if (nDay ==11){
        nDay=4;
    }
    else if (nDay ==12){
        nDay=5;
    }
    else if (nDay ==13){
        nDay=6;
    }
    
    
return nDay;
}

document.getElementById('item-day1').innerHTML = days[actualMDay(actualDay1)];
document.getElementById('item-day2').innerHTML = days[actualMDay(actualDay2)];
document.getElementById('item-day3').innerHTML = days[actualMDay(actualDay3)];
document.getElementById('item-day4').innerHTML = days[actualMDay(actualDay4)];
document.getElementById('item-day5').innerHTML = days[actualMDay(actualDay5)];

var forecastObj = new XMLHttpRequest();
forecastObj.open ('GET','https://api.openweathermap.org/data/2.5/forecast?q=Fish+Haven,US&units=imperial&APPID=d9c8053c3b7be7af631bdd13d54058f1', true)
forecastObj.send();

forecastObj.onload = function(){
    var responseJsonObj = JSON.parse(forecastObj.responseText);
    console.log(responseJsonObj);

    var iconcode = responseJsonObj.list[5].weather[0].icon;
var icon_path = 'https://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay1').src = icon_path;

var iconcode = responseJsonObj.list[13].weather[0].icon;
var icon_path = 'https://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay2').src = icon_path;

var iconcode = responseJsonObj.list[21].weather[0].icon;
var icon_path = 'https://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay3').src = icon_path;

var iconcode = responseJsonObj.list[29].weather[0].icon;
var icon_path = 'https://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay4').src = icon_path;

var iconcode = responseJsonObj.list[37].weather[0].icon;
var icon_path = 'https://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay5').src = icon_path;

document.getElementById('item-tempDay1').innerHTML = responseJsonObj.list[5].main.temp;
document.getElementById('item-tempDay2').innerHTML = responseJsonObj.list[13].main.temp;
document.getElementById('item-tempDay3').innerHTML = responseJsonObj.list[21].main.temp;
document.getElementById('item-tempDay4').innerHTML = responseJsonObj.list[29].main.temp;
document.getElementById('item-tempDay5').innerHTML = responseJsonObj.list[37].main.temp;

}