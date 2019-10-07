var $;
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Orlando&APPID=088c1e84c42d34d858b4e7ba64e5b8cc&units=metric",function(){
console.log(data);
var icon="https://openweathermap.org/img/w/" + data.weather.icon +".png" ;
var temp= data.main.temp;
var weather=data.weather.main;
console.log(icon)
$(".icon").attr("src", icon);
$(".weather").append(weather);
$('.temp').append(temp);
});