function assunto() {
    const nome = document.getElementById('nomeJogador').value;
    if (nome.trim() === '') {
      alert('Por favor, insira seu nome.');
    } else {
      localStorage.setItem('nomeJogador', nome);
      window.location.href = 'home.html';
    }
  }

function assunto2() {
    const nome = document.getElementById('nomeJogador').value;
    if (nome.trim() === '') {
      alert('Por favor, insira seu nome.');
    } else {
      localStorage.setItem('nomeJogador', nome);
      window.location.href = 'home2.html';
    }
  }