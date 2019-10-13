var time= new Date(2019,09,13,13,00);
var current = new Date();
var diff= current-time;
console.log("fff");
seconds= Math.floor(diff/1000);
minutes=Math.floor(seconds/60);
seconds=seconds%60;
hours=Math.floor(minutes/60);
minutes=minutes%60;
days=Math.floor(hours/24);
hours=hours%24;
var datetime= `${days} days , ${hours} hours and ${minutes} minutes`;
const text = 'An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.';
async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

const digestHex = digestMessage(text);
console.log(digestHex);
document.getElementById("time").innerHTML=datetime;
document.getElementById("hash").innerHTML=digestHex;
