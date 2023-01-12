e --> enter
i --> imes
a --> ai
o --> ober
u --> ufat

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = texto.replace(/i/igm,"imes");
    var txtCifrado = texto.replace(/a/igm,"ai");
    var txtCifrado = texto.replace(/o/igm,"ober");
    var txtCifrado = texto.replace(/u/igm,"ufat");

    document.getElementById("imgPersonaje").style.display = none;
    document.getElementById("texto").style.display = none;
    document.getElementById("areaTexto").innerHTML = txtCifrado;
}