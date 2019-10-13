
    
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Orlando&APPID=088c1e84c42d34d858b4e7ba64e5b8cc&units=metric",function(data){
//console.log(data);
//var data=data.data;
var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png" ;
var temp= data.main.temp;
var weather=data.weather[0].main;
//console.log(icon);
//console.log(temp);
//console.log(weather);
$(".icon").attr("src", icon);
$('.temp').append("temp=" + temp);
$('.weather').append("weather=" + weather);
});