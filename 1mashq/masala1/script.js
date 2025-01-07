let amalyot1 = prompt('Ismingizni kiriting');
let amalyot = +prompt("Tug'ulgan yilingizni kiriting");

 let qayta = amalyot1.charAt(0).toUpperCase() + amalyot1.slice(1).toLowerCase();

let yil = 2024 - amalyot;
let oy = yil * 12;
let hafta = (yil * 365)/7;
let kun = yil * 365;
let soat = yil * 365 * 24;
let minut = yil * 365 * 24 * 60;
let sekund = yil * 365 * 24 * 60 * 60;

alert(`Hurmatli ${qayta}, Siz ${yil} yosh ${oy} oy, ${hafta.toFixed()} hafta, ${kun} kun, ${soat.toFixed()} soat, ${minut.toFixed()} minut, ${sekund.toFixed()} sekund yashadingiz`);