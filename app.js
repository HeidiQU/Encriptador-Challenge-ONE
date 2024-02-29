const txtOriginal = document.querySelector("#texto-original");
const txtResultado = document.querySelector("#texto-resultado");
const txtCopiado = "";
const txtLeyenda = "Listo para Encriptar"

const matriz_codigo = [
    ["e", "enter"],     //indices 0,0 y 0,1
    ["i", "imes"],      //indices 1,0 y 1,1
    ["a", "ai"],        //indices 2,0 y 2,1
    ["o", "ober"],      //indices 3,0 y 3,1
    ["u", "ufat"],      //indices 4.0 y 4,1
];


// CODIGO PARA ENCRIPTAR EL TEXTO
function botonEncriptar(){
    if (!/^[a-z]+(\s[a-z]+)*$/.test(txtOriginal.value)){
        //console.log("caracteres no permitidos");
        txtResultado.innerHTML = "RECUERDA SOLO MENSAJE EN MINÚSCULAS SIN CARACTERES ESPECIALES"
    }
    else{
        //console.log(txtOriginal.value)
        const textoEncriptado = accionEncriptar(txtOriginal.value);
        txtResultado.value = textoEncriptado;
        document.getElementById("texto-resultado").innerHTML=txtResultado.value;
        // console.log(txtResultado.value);
    }
    return;
}

function accionEncriptar(frase){
    for (let i=0; i<matriz_codigo.length; i++){
        if (frase.includes(matriz_codigo[i][0])){
            frase = frase.replaceAll(
                matriz_codigo[i][0],
                matriz_codigo[i][1]
            );
        }
    }
    return frase;
}

// CODIGO PARA DESENCRIPTAR EL TEXTO INGRESADO
function botonDesencriptar(){
    //console.log(txtOriginal.value)
    const textoNormal = accionDesencriptar(txtOriginal.value);
    //console.log(textoNormal);
    txtResultado.value = textoNormal;
    document.getElementById("texto-resultado").innerHTML=txtResultado.value;
    return;
}

function accionDesencriptar(frase){
    for (let i=4; i>=0; i--){
        if (frase.includes(matriz_codigo[i][1])){
            frase = frase.replaceAll(
                matriz_codigo[i][1],
                matriz_codigo[i][0]
            )
        }
    }
    return frase;
}

// CODIGO PARA LIMPIAR LOS CAMPOS 
function botonLimpiar(){
    txtOriginal.value="";
    txtResultado.innerHTML=txtLeyenda;
    return;
}

// CODIGO PARA COPIAR EL CAMPO DE RESULTADO
function botonCopiar(){
    const textoCopiado = txtResultado.value;
    txtOriginal.value = textoCopiado;
    navigator.clipboard.writeText(textoCopiado)
    txtResultado.innerHTML=txtLeyenda;
    return;
}
