function cadastrarUsuario() {
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];
    const dados = {
        username: document.getElementById('cadastro-username').value,
        password: document.getElementById('cadastro-password').value,
        email: document.getElementById('cadastro-email').value,}

    usuariosCadastrados.push(dados)
    
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados))
}

function login() {
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];
    const dados = {
        email: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value,
    }

    const usuario = usuariosCadastrados.find(usuario => usuario.email === dados.email && usuario.password === dados.password)

    if (usuario) {
        alert('Login realizado com sucesso')
        document.location.href = 'Home2.html'
    } else {
        alert('Usuário ou senha incorretos')
    }
}