
var forecastObj = new XMLHttpRequest();
forecastObj.open ('GET','https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8dc7d24dc0c4e4babe471e12034b5a39', true)
forecastObj.send();

forecastObj.onload = function(){
    var responseJsonObj = JSON.parse(forecastObj.responseText);
    console.log(responseJsonObj);

document.getElementById('item-tempDay1').innerHTML = responseJsonObj.list[7].main.temp;
document.getElementById('item-tempDay2').innerHTML = responseJsonObj.list[15].main.temp;
document.getElementById('item-tempDay3').innerHTML = responseJsonObj.list[23].main.temp;
document.getElementById('item-tempDay4').innerHTML = responseJsonObj.list[31].main.temp;
document.getElementById('item-tempDay5').innerHTML = responseJsonObj.list[39].main.temp;

var iconcode = responseJsonObj.list[7].weather[0].icon;
var icon_path = 'http://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay1').src = icon_path;

var iconcode = responseJsonObj.list[15].weather[0].icon;
var icon_path = 'http://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay2').src = icon_path;

var iconcode = responseJsonObj.list[23].weather[0].icon;
var icon_path = 'http://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay3').src = icon_path;

var iconcode = responseJsonObj.list[31].weather[0].icon;
var icon_path = 'http://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay4').src = icon_path;

var iconcode = responseJsonObj.list[39].weather[0].icon;
var icon_path = 'http://openweathermap.org/img/w/' + iconcode + ".png";
document.getElementById('item-iconDay5').src = icon_path;

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

}
