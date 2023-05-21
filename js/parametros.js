/*//defino variables y asigno id
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
});*/


//**--------mostrar_ocultar funciones - ME COSTO LOGRAR UNIFICAR TODO EN UNA SOLA FUNCIÓN---------------------- */

function mostrar_res1(){
  document.getElementById("res1").style.display="block";
  
}

function ocultar_res1(){
  document.getElementById("res1").style.display="none";
  
}



function mostrar_ocultar_res1(){
  var respuesta1= document.getElementById("res1");


  if(respuesta1.style.display==="none"){
  mostrar_res1()
  document.getElementById("boton1").innerHTML="Ocultar";
    
}
else{
  ocultar_res1();
  document.getElementById("boton1").innerHTML="¿Qué validez tienen los cursos de Academia Web?";
  }
}

function mostrar_res2(){
  document.getElementById("res2").style.display="block";
  
}

function ocultar_res2(){
  document.getElementById("res2").style.display="none";
  
}



function mostrar_ocultar_res2(){
  var respuesta2= document.getElementById("res2");


  if(respuesta2.style.display==="none"){
    mostrar_res2()
    document.getElementById("boton2").innerHTML="Ocultar";
      
  }
  else{
    ocultar_res2();
    document.getElementById("boton2").innerHTML="¿Cuáles son los medios de pago?";
    }
}

function mostrar_res3(){
  document.getElementById("res3").style.display="block";
  
}

function ocultar_res3(){
  document.getElementById("res3").style.display="none";
  
}



function mostrar_ocultar_res3(){
  var respuesta3= document.getElementById("res3");


    if(respuesta3.style.display==="none"){
      mostrar_res3()
      document.getElementById("boton3").innerHTML="Ocultar";
        
    }
    else{
      ocultar_res3();
      document.getElementById("boton3").innerHTML="¿Cómo es la modalidad de cursada?";
      }
}

function mostrar_res4(){
  document.getElementById("res4").style.display="block";
  
}

function ocultar_res4(){
  document.getElementById("res4").style.display="none";
  
}



function mostrar_ocultar_res4(){
  var respuesta4= document.getElementById("res4");


      if(respuesta4.style.display==="none"){
        mostrar_res4()
        document.getElementById("boton4").innerHTML="Ocultar";
          
      }
      else{
        ocultar_res4();
        document.getElementById("boton4").innerHTML="¿Qué pasa si no cumplo con los tiempos de entrega de algún trabajo práctico?";
        }
  
} 