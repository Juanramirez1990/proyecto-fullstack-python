function validarFormulario() {
    var name = document.getElementById("name").value.trim();
    var edad = document.getElementById("edad").value.trim();
    var fecha = document.getElementById("fecha").value.trim();
    var email = document.getElementById("email").value.trim();
    var dni = document.getElementById("dni").value.trim();


   
    if (name === "" || edad === "" || fecha === "" || email=== "" || dni=== "" ) {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    
    for (var i = 0; i < name.length; i++) {
      var charCode = name.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

  
    if (dni.length !== 8) {
      alert("El campo 'dni' debe contener exactamente 8 dígitos numéricos.");
      return false;
    }
    for (var j = 0; j < dni.length; j++) {
      var digit = dni.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'dni' solo puede contener dígitos numéricos.");
        return false;
      }
    }

    alert("Formulario enviado correctamente. Nos estaremos contactando a la brevedad. Muchas gracias");
    return 

    
  }
