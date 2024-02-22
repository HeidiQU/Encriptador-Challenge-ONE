
const txtOriginal = document.querySelector("#texto-original");
const txtResultado = document.querySelector("#texto-resultado");
const txtCopiado = "";

const matriz_codigo = [
    ["e", "enter"],     //indices 0,0 y 0,1
    ["i", "imes"],      //indices 1,0 y 1,1
    ["a", "ai"],        //indices 2,0 y 2,1
    ["o", "ober"],      //indices 3,0 y 3,1
    ["u", "ufat"],      //indices 4.0 y 4,1
];


// CODIGO PARA ENCRIPTAR EL TEXTO INGRESADO
function botonEncriptar(){
    const textoEncriptado = accionEncriptar(txtOriginal.value);
    txtResultado.value = textoEncriptado;
}

function accionEncriptar(frase){
    for (let i=0; i<matriz_codigo.length; i++){
        if (frase.includes(matriz_codigo[i][0])){
            frase = frase.replaceAll(
                matriz_codigo[i][0],
                matriz_codigo[i][1]
            )
        }
    }
    return frase;
}

// CODIGO PARA DESENCRIPTAR EL TEXTO INGRESADO
function botonDesencriptar(){
    const textoNormal = accionDesencriptar(txtOriginal.value);
    txtResultado.value = textoNormal;
}

function accionDesencriptar(frase){
    for (let i=0; i<matriz_codigo.length; i++){
        if (frase.includes(matriz_codigo[i][1])){
            frase = frase.replaceAll(
                matriz_codigo[i][1],
                matriz_codigo[i][0]
            )
        }
    }
    return frase;
}
/*
// CODIGO PARA LIMPIAR LOS CAMPOS 
function botonLimpiar(){
    txtOriginal.value="";
    txtResultado.value="";
}*/

// CODIGO PARA COPIAR EL CAMPO DE RESULTADO
function botonCopiar(){
    const textoCopiado = txtResultado.value;

    console.log(textoCopiado);

}
