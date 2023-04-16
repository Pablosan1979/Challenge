//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat


function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas.
    //g es para toda la linea u oración
    //m es para que afecte multiples lineas o párrafos.
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("Copiar").style.display = "show";
    document.getElementById("Copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas.
    //g es para toda la linea u oración
    //m es para que afecte multiples lineas o párrafos.
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("Copiar").style.display = "show";
    document.getElementById("Copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand("copy");
    alert("El texto ha sido copiado al portapapeles.");
}