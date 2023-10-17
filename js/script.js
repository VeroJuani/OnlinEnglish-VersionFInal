function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var consulta = document.getElementById("consulta").value;
    var errorMessage = document.getElementById("error-message");

    if (!nombre || !apellido || !edad || !email || !celular || !consulta) {
        errorMessage.textContent = "Todos los campos son obligatorios. Por favor, complételos.";
        return false;
    }

    if (!email.includes("@")) {
        errorMessage.textContent = "El campo de correo electrónico debe contener un '@'.";
        return false;
    }



    errorMessage.textContent = ""; 
    return true; 
}

