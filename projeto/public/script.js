console.log("SCRIPT CARREGADO");

async function validarLogin() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    try {

        const resposta = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        });

        const dados = await resposta.json();

        if (dados.sucesso) {

            console.log("LOGIN OK", dados);

            localStorage.setItem("nomeAluno", dados.usuario.nome);

            alert("Login realizado com sucesso!");

            
           window.location.href = " /frontend/dashbord.html";

        } else {
            alert("Email ou senha inválidos!");
        }

    } catch (erro) {
        console.error("Erro:", erro);
        alert("Erro ao conectar com o servidor.");
    }
}

function mostrarSenha() {

    const senha = document.getElementById("senha");

    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}

function recuperarSenha() {

    const emailRecuperacao = document.getElementById("emailRecuperacao");

    if (!emailRecuperacao) return;

    const email = emailRecuperacao.value;

    if (email === "") {
        alert("Digite seu e-mail!");
        return;
    }

    alert("Link de recuperação enviado para: " + email);
}

function salvarPerfil() {

    const nomeInput = document.getElementById("nomeInput");

    if (!nomeInput) return;

    const nome = nomeInput.value;

    localStorage.setItem("nomeAluno", nome);

    const nomePerfil = document.getElementById("nomePerfil");

    if (nomePerfil) {
        nomePerfil.textContent = nome;
    }
}

window.onload = function () {

    const nome = localStorage.getItem("nomeAluno");

    const nomeAluno = document.getElementById("nomeAluno");

    if (nomeAluno && nome) {
        nomeAluno.textContent = `Bem-vindo ${nome}`;
    }
};