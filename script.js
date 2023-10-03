function inicio(){
  receberNome();
  window.location.href = "home.html";
}

function receberNome() {
  var nome = document.getElementById("nome").value;
  if(nome != ""){  
    document.getElementById("boasVindas").innerHTML = nome;
  } else{
    alert("Preencha o seu nome!")
  }
  
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
  