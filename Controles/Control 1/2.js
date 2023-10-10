const frase = prompt('Ingrese una frase')
const letra = prompt('Ingrese una letra');
let x = 0
if (isNaN(frase)) {
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == letra || frase[i] == letra) {
            x += 1
        }
    }
    alert('La cantidad de letras es: ' + x)
} else {
    alert('Ingrese una frase')
}