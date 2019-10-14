var starttime= new Date(2019,09,14,20,00);
var current = new Date();
var diff= current-starttime;
console.log("fff");
seconds= Math.floor(diff/1000);
minutes=Math.floor(seconds/60);
seconds=seconds%60;
hours=Math.floor(minutes/60);
minutes=minutes%60;
days=Math.floor(hours/24);
hours=hours%24;
var datetime= `${days} days , ${hours} hours and ${minutes} minutes`;
document.getElementById("time").innerHTML=datetime;

