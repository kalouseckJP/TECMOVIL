let numeros = prompt('Ingrese numeros separados por comas');
const re = /[^\d,]+/g //^ = significa que busca lo que no este ahi, g = es para revisar toda la cadena
const array = String(numeros).split(',');
let mayor = 0
if(!re.test(numeros)){
    for (let i = 0; i < array.length; i++) {
        mayor = Math.max(mayor,array[i])
        console.log(mayor)
    }
    alert('El numero más grande es '+mayor)
}else{
    alert('No son numeros')
}