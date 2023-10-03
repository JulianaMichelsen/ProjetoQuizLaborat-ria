var nome;
const nomeUsuario = window.localStorage.getItem("usuario")
            document.getElementById("boasVindas").innerHTML = "Olá! " + nomeUsuario;

function inicio(){
    nome = document.getElementById("nome").value;
  if(nome == ""){
    alert("Preencha seu nome!")
    }else {
  localStorage.setItem("usuario", nome);
  window.location.href = "home.html";
    }
  
}

function verificarRespostas(){
  let pergunta1 = document.querySelector("imput[name="pergunta1"]:")
}

(function() { 
        var dialog = document.getElementById('DialogBox'); 
        document.getElementById('show').onclick = function() { dialog.show(); }; 
        document.getElementById('hide').onclick = function() { dialog.close(); }; 
      })();


(function() { 
        var dialog = document.getElementById('DialogBox2'); 
        document.getElementById('show2').onclick = function() { dialog.show(); }; 
        document.getElementById('hide2').onclick = function() { dialog.close(); }; 
      })();

