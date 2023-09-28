const re = /[^\d]+/g
let estatura
let peso
do{
    estatura = prompt('Ingrese su altura en cm')
}while(!re.test(estatura) && (estatura < 0 || estatura > 300))
do {
    peso = prompt('Ingrese su peso en kg')
} while (!re.test(peso) && (peso < 0 || peso > 650));
console.log(estatura, peso)

