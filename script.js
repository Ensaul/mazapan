function checkPassword(){

let pass=document.getElementById("password").value

if(pass==="14052025"){

document.getElementById("login").style.display="none"

let sorpresa=document.getElementById("sorpresaCumple")

sorpresa.style.display="flex"

/* explosión de corazones */

for(let i=0;i<120;i++){
setTimeout(crearCorazon,i*20)
}

setTimeout(()=>{

sorpresa.style.display="none"
document.getElementById("contenido").style.display="block"

},4000)

}else{

document.getElementById("error").innerHTML="Contraseña incorrecta"

}

}


/* CONTADOR ROMÁNTICO */

function contador(){

let inicio=new Date("2025-05-14")
let ahora=new Date()

let diff=ahora-inicio

let dias=Math.floor(diff/(1000*60*60*24))
let horas=Math.floor(diff/(1000*60*60)%24)
let minutos=Math.floor(diff/(1000*60)%60)
let segundos=Math.floor(diff/1000%60)

document.getElementById("contador").innerHTML=

"💙 "+dias+" días "+
horas+" horas "+
minutos+" minutos "+
segundos+" segundos 💙"

}

setInterval(contador,1000)



/* CORAZONES */

function crearCorazon(){

let corazon=document.createElement("div")

corazon.classList.add("corazon")

corazon.innerHTML="💙"

corazon.style.left=Math.random()*100+"vw"
corazon.style.fontSize=(Math.random()*25+15)+"px"

document.body.appendChild(corazon)

setTimeout(()=>{
corazon.remove()
},6000)

}



/* CORAZONES CONSTANTES */

setInterval(()=>{

crearCorazon()

},500)



/* CORAZONES SIGUIENDO EL MOUSE */

document.addEventListener("mousemove",function(e){

if(Math.random()<0.2){

let corazon=document.createElement("div")

corazon.classList.add("corazon")

corazon.innerHTML="💙"

corazon.style.left=e.pageX+"px"
corazon.style.top=e.pageY+"px"
corazon.style.position="absolute"

document.body.appendChild(corazon)

setTimeout(()=>{

corazon.remove()

},2000)

}

})



/* CARTA */

function abrirCarta(){

let carta=document.getElementById("carta")

carta.style.display="block"

carta.style.animation="aparecer 1s"

}



/* GALERIA */

function abrirImagen(img){

let visor=document.getElementById("visorImagen")

let grande=document.getElementById("imagenGrande")

grande.src=img.src

visor.style.display="flex"

}

function cerrarImagen(){

document.getElementById("visorImagen").style.display="none"

}



/* MENSAJE FINAL */

let texto="Elías 💚 ama a Malena 💙"

let i=0

function escribir(){

if(i<texto.length){

document.getElementById("mensajeRomantico").innerHTML+=texto.charAt(i)

i++

setTimeout(escribir,120)

}

}



window.addEventListener("scroll",function(){

let sec=document.querySelector(".finalRomantico")

let pos=sec.getBoundingClientRect().top

if(pos<window.innerHeight){

escribir()

}

})



/* SORPRESA SECRETA */

document.addEventListener("dblclick",function(){

alert("💙 Elías ama muchísimo a Mazapán 💙")

for(let i=0;i<50;i++){
crearCorazon()
}

})