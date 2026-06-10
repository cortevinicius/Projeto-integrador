function validarLogin() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return false;
    }

    alert("Login realizado com sucesso!");
    return true;
}

function mostrarSenha() {
    let senha = document.getElementById("senha");

    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}

function recuperarSenha() {
    let email = document.getElementById("emailRecuperacao").value;

    if (email === "") {
        alert("Digite seu e-mail!");
        return;
    }

    alert("Link de recuperação enviado para: " + email);
}
document.getElementById("nomeAluno").innerHTML =
    `Bem-vindo ${nome} 👋`;

    function salvarPerfil(){

    const nome = document.getElementById("nomeInput").value;

    console.log(nome);

    localStorage.setItem("nomeAluno", nome);

    document.getElementById("nomePerfil").textContent = nome;
}