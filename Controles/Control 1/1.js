let input
const re = /[0.][\d]/

do {
    input = prompt('Ingrese su puntuacion');
    if (re.test(input)) {
        let respuesta = input * 350000
        if (input == 0.0 || input == 0.2) {
            alert('Rendimiento insuficiente, recibira: ' + respuesta)
        } else if (input == 0.4) {
            alert('Rendimiento aceptable, recibira: ' + respuesta)
        } else if (input == 0.6) {
            alert('Rendimiento meritorio, recibira: ' + respuesta)
        } else if (input == 0.8) {
            alert('Rendimiento excelente, recibira: ' + respuesta)
        } else {
            alert('Ingrese un valor valido')
        }
    } else {
        alert('Ingrese un valor valido')
    }
} while (!re.test(input));
