var nome;

function inicio(){
    nome = document.getElementById("nome").value;
  localStorage.setItem("nome", nome);
  window.location.href = "home.html";
  //receberNome();
  //alert(nome);
}

function receberNome() {
    var titulo = document.getElementById("boasVindas");
    titulo.innerHTML="Olá " + nome + "!";

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
  