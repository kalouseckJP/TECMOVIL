//alert('Hola mundo');
alert(70*2);
console.log('Hola Mundo');
let frase = 'Esta es una frase en una variable externa.';
console.log(`Test de backtick: ${frase}`);
console.log("Test de concatenacion:",frase);
confirmacion = confirm('Test de confirm en variable');
if(confirmacion){
    console.log('Test verdadero');
}else{
    console.log('Test falso');
}

if(confirm('Test de confirm sin variable')){
    console.log('Test verdadero');
}else{
    console.log('Test falso');
}