

function header_validacao() {
    let usuario = document.querySelector(`#user_id`);
    let login = document.querySelector(`#login_id`);

    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    var b_usuario = document.querySelector(`#b_usuario`);

    if (email == null || id == null) {
        usuario.style.display = `none`
        login.style.display = `flex`
    } else {

        b_usuario.innerHTML = nome;

        usuario.style.display = `flex`
        login.style.display = `none`
    }

}
function quiz_validacao() {
    let usuario = document.querySelector(`#user_id`);
    let login = document.querySelector(`#login_id`);

    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    if (email == null || id == null) {
        window.location = "login.html"
    } else {
        window.location = "quiz.html"
    }
}

function acessarPerfil() {
    let usuario = document.querySelector(`#user_id`);
    let login = document.querySelector(`#login_id`);

    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    if (email == null || id == null) {
        window.location = "login.html"
    } else {
        window.location = "dash.html"
    }
}