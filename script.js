// Selecione o botão "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.product button');

// Selecione o contador do carrinho
const cartItemsCount = document.querySelector('.cart-items');

// Inicialize o contador do carrinho
let itemCount = 0;

// Adicione um evento de clique a cada botão "Adicionar ao Carrinho"
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Incrementa o contador do carrinho
    itemCount++;

    // Atualiza o texto do contador do carrinho
    cartItemsCount.textContent = itemCount;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os dados do formulário
    const username = loginForm.querySelector('#username').value;
    const password = loginForm.querySelector('#password').value;

    // Simples verificação de login (substitua com sua lógica real de login)
    if (username === 'user' && password === '123') {
      alert('Login bem sucedido!');
      // Aqui você pode redirecionar o usuário para outra página, etc.
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  });
});
