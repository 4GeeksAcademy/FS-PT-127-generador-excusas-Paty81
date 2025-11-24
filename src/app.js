import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
const quien = ['Mi abuela', 'Mi madre', 'Un alien', 'Mi gato'];
const accion = ['se comió', 'quemó', 'aterrizó en', ' rompio'];
const que = ['mi proyecto', 'el ordenador', 'mi brazo' , 'mi casa'];
const cuando = ['antes de salir', 'esta mañana', 'hace cinco minutos', 'mientras me duchaba']
;
const randomquien = quien[Math.floor(Math.random() * quien.length)];
const randomaccion = accion[Math.floor(Math.random() * accion.length)];
const randomque = que[Math.floor(Math.random() * que.length)];
const randomcuando = cuando[Math.floor(Math.random() * cuando.length)];

let excusa = randomquien + " " + randomaccion + " " + randomque + " " + randomcuando;
document.getElementById("excuse").innerHTML = excusa;
   console.log(excusa);

  console.log("Hello Rigo from the console!");
};
