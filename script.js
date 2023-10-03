function inicio(){
  window.location.href = "home.html";
}

function receberNome() {
  var nome = document.getElementById("nome").value;
  
  document.getElementById("receberNome").value = recebernome;
  
  document.getElementById("nome").value = nome;
  
  
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
  