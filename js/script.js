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

    // Aquí puedes agregar más validaciones según tus necesidades

    errorMessage.textContent = ""; // Borra cualquier mensaje de error anterior
    return true; // Envía el formulario si todo está correcto
}

function toggleMenu() {
    var menu = document.querySelector(".mobile-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
