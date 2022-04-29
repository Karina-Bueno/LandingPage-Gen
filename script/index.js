let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");

function validaNome() {
    let txt = document.querySelector("#txtNome")

    if (nome.value.length < 3) {  //se o nome for menor que 3 
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = ""
        nomeOk = true  //enviar formulario caso nome esteja certo
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1) {  // caso o usuario não coloque o @  //indexOf  é utilizado para encontrar um valor dentro de uma string ou array, caso o valor não seja encontrado, ele retorna -1.
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = ""
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")

    if (mensagem.value.length >= 100) {
        txtMensagem.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtMensagem.style.color = "red"
    } else {
        txtMensagem.innerHTML = ""
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}