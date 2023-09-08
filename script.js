function loginForm() {

    var usuario = document.getElementsByName("usuario")[0].value;
    var senha = document.getElementsByName("senha")[0].value;

    // Aqui, você pode adicionar a lógica de verificação do usuário e senha
    // Por exemplo, você pode compará-los com valores hardcoded (não recomendado para produção)

    if (usuario === "vinicius" && senha === "1234") {
        alert("Login correto!");
        window.open("pag2.html");
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
};