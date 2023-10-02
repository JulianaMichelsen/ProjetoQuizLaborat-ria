/**
 * Botão Submit
 */
document.getElementById("btnRespostaAno").onclick = function() {
    var radios = document.getElementsByName("ano");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
        }
    }
};

