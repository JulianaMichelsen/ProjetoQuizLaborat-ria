var nome;
const nomeUsuario = window.localStorage.getItem("usuario");
document.getElementById("boasVindas").innerHTML = "Olá! " + nomeUsuario;

function inicio() {
  nome = document.getElementById("nome").value;
  if (nome == "") {
    alert("Preencha seu nome!");
  } else {
    localStorage.setItem("usuario", nome);
    window.location.href = "home.html";
  }
}

function verificarRespostas(value) {
  let pergunta1 = document.querySelector(
    'imput[name="pergunta1"]:checked'
  ).value;
  if (pergunta1 === "true") {
    alert("Resposta Correta");
  } else {
    alert("Resposta errada");
  }
}
document
  .querySelector("input[type='submit']")
  .addEventListener("click", verificarRespostas);
