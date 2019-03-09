
    
    let f =parseInt(document.getElementById('TemperatureTd').innerHTML);
    let ws = parseInt(document.getElementById('WindTd').innerHTML);
    
   
    var wind = Math.pow( ws, 0.16);
    var windChillFactor = 35.74 + 0.6215 * f - 35.75 * wind + ((0.4275 * f) * wind);
    //var windChillFactor = 35.74 + 0.6215 * fahrenheit - 35.75 * wind + 0.4275 * fahrenheit * wind;

    var digits = 2;
    var multiplier = Math.pow(10, digits);
    var result= Math.round(windChillFactor * multiplier) / multiplier + "º F";
    document.getElementById('outputTd').innerHTML = result;

