let nota1, nota2, nota3;
const re = /[^\d]+[.][^\d]*/;
const va = / /;

do {
    nota1 = prompt('Ingrese la primera nota.');
} while (verificar(nota1));
do {
    nota2 = prompt('Ingrese la segunda nota.');
} while (verificar(nota2));
do {
    nota3 = prompt('Ingrese la tercera nota.');
} while (verificar(nota3));

nota1 *= 0.4;
nota2 *= 0.3;
nota3 *= 0.3;

let notafinal = nota1 + nota2 + nota3;
console.log(notafinal)

if(notafinal < 3.95 || notafinal < 39.5){
    alert('Nota: ' + notafinal + '\nAsignatura reprobada')
}else if((notafinal < 3.95 && notafinal > 4.94) || (notafinal < 39.5 && notafinal > 49.4)){
    alert('Nota: ' + notafinal + '\nExamen pendiente')
}else{
    alert('Nota: ' + notafinal + '\nAsignatura aprobada')
}

function verificar(entrada){
    let x = false
    if(re.test(entrada) || va.test(entrada) || entrada==""){
        x = true
        alert('Ingrese numeros enteros positivos')
    }
    return x
}