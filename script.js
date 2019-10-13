var $;
;
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Orlando&APPID=088c1e84c42d34d858b4e7ba64e5b8cc&units=metric");
const axios = require("axios");
axios.get("http://api.openweathermap.org/data/2.5/weather?q=Orlando&APPID=088c1e84c42d34d858b4e7ba64e5b8cc&units=metric").then(function(data){
console.log(data);
data=data.data;
console.log(data);
var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png" ;
var temp= data.main.temp;
var weather=data.weather[0].main;
console.log(icon);
console.log(weather);
console.log(temp);
$(".icon").attr("src", icon);
$('.temp').append( "temp="+ temp);
$('.weather').append("weather=" + weather);
}).catch((err)=>
    {
        console.log(err)
    }
    );