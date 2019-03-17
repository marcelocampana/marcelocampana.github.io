var weatherObj = new XMLHttpRequest();
weatherObj.open ('GET','http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d9c8053c3b7be7af631bdd13d54058f1', true)
weatherObj.send();

weatherObj.onload = function(){
    var responseJsonObject = JSON.parse(weatherObj.responseText);
    console.log(responseJsonObject);

document.getElementById('current-city').innerHTML = responseJsonObject.name;
document.getElementById('currently').innerHTML = responseJsonObject.weather[0].main;
document.getElementById('HighTemp').innerHTML = responseJsonObject.main.temp_max;
document.getElementById('curr-humidity').innerHTML = responseJsonObject.main.humidity;
document.getElementById('curr-winSpeed').innerHTML = responseJsonObject.wind.speed;

let f =parseInt(document.getElementById('HighTemp').innerHTML);
let ws = parseInt(document.getElementById('curr-winSpeed').innerHTML);


var wind = Math.pow( ws, 0.16);
var windChillFactor = 35.74 + 0.6215 * f - 35.75 * wind + ((0.4275 * f) * wind);
//var windChillFactor = 35.74 + 0.6215 * fahrenheit - 35.75 * wind + 0.4275 * fahrenheit * wind;

var digits = 2;
var multiplier = Math.pow(10, digits);
var result= Math.round(windChillFactor * multiplier) / multiplier + "º F";
document.getElementById('outputTd').innerHTML = result;
}


