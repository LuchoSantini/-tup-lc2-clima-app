function validarEmail() {
    var email = document.getElementById("emailUsuario").value;
    if (email == "") {
        document.getElementById("cartelError").style.display = "flex";
    }
}