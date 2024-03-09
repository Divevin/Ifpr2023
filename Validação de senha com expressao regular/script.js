// expressões regulares
//let text = "Vinicius Galindo"
//const regex = /Galindo/ig;
//console.log(text.match(regex));

function validarLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    //Expressão regular para validar o nome do usuário
    const regexUsuario = /^[a-zA-Z0-0]{3,15}$/;

    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?*]) [a-zA-Z\d!@#$%?*]){8,20}$/;

    //Validação do nome do usuário
    if (!regexUsuario.test(usuario)) {
        alert('Nome de usuário invalido.');
        return false;
    }

    if (!regexSenha.test(senha)) {
        alert('Senha invalida.');
        return false;
    }

    //Se tudo estiver ok, submete o formulário
    return true;

}