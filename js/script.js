function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var celular = document.getElementById("celular").value.trim();
    var consulta = document.getElementById("consulta").value.trim();
    var email = document.getElementById("email").value.trim();  // Agrega esta línea

    // Verificar si algún campo está en blanco
    if (nombre === "" || apellido === "" || celular === "" || email === ""|| consulta === "" ) {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }

    // Verificar si el apellido contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < apellido.length; i++) {
        var charCode = apellido.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }

    // Verificar si el celular contiene solo 8 dígitos numéricos

        if (celular.length !== 11) {
            alert("El campo 'celular' debe contener exactamente 11 dígitos numéricos.");
            return false;
        }
        for (var j = 0; j < celular.length; j++) {
            var digit = celular.charAt(j);
            if (digit < "0" || digit > "9") {
                alert("El campo 'celular' solo puede contener dígitos numéricos.");
                return false;
            }
        }
    
        // Validar formato del correo electrónico
        if (!validarEmail(email)) {
            alert("El campo de correo electrónico debe ser válido.");
            return false;
        }
    
        // Si todas las validaciones son exitosas, enviar el formulario
        alert("Formulario enviado correctamente.");
        return true;
    }
    
    function validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }