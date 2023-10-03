function inicio(){
  window.location.href = "home.html";
}

function receberNome() {
  var nome = document.getElementById("receberNome").value;
  console.log(nome);
  
  document.getElementById("receberNome").innerHTML = nome;
  
  
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
  