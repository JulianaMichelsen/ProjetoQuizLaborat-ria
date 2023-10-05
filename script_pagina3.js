var pontos = 0;


const respostasCorretas = {
  1: "Tigre",
  2: "Canguru",
  3: "Papagaio",
};

function responder(pergunta, resposta) {
  const feedbackElement = document.getElementById(`feedback${pergunta}`);
  if (resposta === respostasCorretas[pergunta]) {
    pontos += 10;
    feedbackElement.innerText = "Acertou!";
    feedbackElement.classList.add("feedback");
  } else {
    feedbackElement.innerText = "Errou";
    feedbackElement.classList.remove("feedback");
  }
  mostrarPontos();
}
function mostrarPontos() {
  document.getElementById("pontuacao").innerHTML = pontos;
}

function jogarNovamente() {
  localStorage.removeItem("nomeJogador");
  window.location.replace("index.html");
}

const nomeJogador = localStorage.getItem("nomeJogador");
document.getElementById("nomeJogador").innerHTML = nomeJogador;