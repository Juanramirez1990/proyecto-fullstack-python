function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    var name = document.getElementById("name").value.trim();
    var edad = document.getElementById("edad").value.trim();
    var fecha = document.getElementById("fecha").value.trim();
    var email = document.getElementById("email").value.trim();
    var dni = document.getElementById("dni").value.trim();


    // Verificar si algún campo está en blanco
    if (name === "" || edad === "" || fecha === "" || email=== "" || dni=== "" ) {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < name.length; i++) {
      var charCode = name.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    // Verificar si el DNI contiene solo 8 dígitos numéricos
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

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente. Nos estaremos contactando a la brevedad. Muchas gracias");
    return 

    
  }
