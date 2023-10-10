const usuario = prompt('Ingrese su nickname')
const reMin = /[a-z]+/
const reMay = /[A-Z]+/
const reNum = /[\d]+/
const reOrd = /[a-zA-Z][a-zA-Z]*[\d]*[\d]/

let longitud = String(usuario).length

console.log('logitud ' + longitud);
if (longitud >= 6) {
    console.log(usuario)
    console.log('reMin: ' + reMin.test(usuario) + '\nreMay ' + reMay.test(usuario) + ' \nreNum ' + reNum.test(usuario) + ' \nreOrd ' + reOrd.test(usuario))
    if (reMin.test(usuario) && reMay.test(usuario) && reNum.test(usuario)) {
        alert('El nickname ingresado es valido')
    } else {
        alert('El nickname no cumple con los requisitos')
    }
}
