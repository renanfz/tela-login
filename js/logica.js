let btnOk = document.getElementById('ok');
let btnEntrar = document.getElementById('entrar');
let modal = document.querySelector('dialog');

btnEntrar.onclick = function () {
    modal.showModal();
}

btnOk.onclick = function () {
    modal.close();
}