function inicio(){
  window.location.href = "home.html";
}

function receberNome() {
  document.getElementById("nome").value;
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
  