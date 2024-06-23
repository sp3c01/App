document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obter os valores dos campos de usuário e senha
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Verificar se o usuário e senha correspondem
  if (username === 'controlz' && password === 'controlz1') {
    alert('Login bem-sucedido!');
    
    // Redirecionar para a página de conteúdo
    window.location.href = 'content.html';
  } else {
    alert('Usuário ou senha incorretos. Tente novamente.');
  }
});