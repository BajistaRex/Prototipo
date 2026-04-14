document.addEventListener("DOMContentLoaded",function(){

// SLIDER AUTOMÁTICO
let slides=document.querySelectorAll(".slide");
let index=0;

function cambiarSlide(){

slides[index].classList.remove("active");

index++;

if(index>=slides.length){
index=0;
}

slides[index].classList.add("active");

}

setInterval(cambiarSlide,4000);


// FORMULARIO + WHATSAPP
let form=document.getElementById("formulario-contacto");

form.addEventListener("submit",function(e){

let nombre=document.getElementById("nombre").value;
let correo=document.getElementById("correo").value;
let mensaje=document.getElementById("mensaje").value;

// MENSAJE PARA WHATSAPP
let texto=`Hola, soy ${nombre}%0A
Correo: ${correo}%0A
Mensaje: ${mensaje}`;

let numero="5215580416082"; // ← CAMBIA ESTE NÚMERO

window.open(`https://wa.me/${numero}?text=${texto}`,"_blank");

// el form también se envía al correo automáticamente (FormSubmit)

});

});


// MENÚ RESPONSIVE
function toggleMenu(){
let menu=document.querySelector("nav ul");
menu.classList.toggle("show");
}