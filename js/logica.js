let btnOk = document.getElementById('ok');
let btnEntrar = document.getElementById('entrar');
let btnSenha = document.getElementById("esenha");
let modal = document.querySelector('dialog');

btnEntrar, btnSenha.onclick = function () {
    modal.showModal();
}

btnOk.onclick = function () {
    modal.close();
}