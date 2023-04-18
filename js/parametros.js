//defino variables y asigno id
const botonEnviar = document.querySelector("#botonEnviar");
const botonAtras = document.querySelector("#botonAtras");
const step1 = document.querySelector("#step-1");
const info= document.querySelector("#info");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
botonEnviar.addEventListener("click", function() {
  // recopilar datos del primer paso
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  
  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${name}<br>Email:${email}`;
  
  // ocultar el primer paso y mostrar el segundo paso
  info.style.display="none";
  step1.style.display = "none";
  step2.style.display = "block";
});

//función inversa
botonAtras.addEventListener("click", function() {
  info.style.display="block";
  step1.style.display = "block";
  step2.style.display = "none";
});