const re = /[\d]+/
let cantidad

do {
    cantidad = prompt('Ingrese la cantidad sin IVA');
    if (re.test(cantidad) && cantidad >= 0) {
        let IVA
        do {
            IVA = prompt('IVA a aplicar');
            if (re.test(IVA) || IVA == '' || IVA == ' ') {
                alert('La cantidad total es: ' + aplicar(cantidad, IVA))
            } else {
                alert('Ingrese una cantidad valida')
            }
        } while (!re.test(IVA));
    } else {
        alert('Ingrese solo numeros positivos')
    }
} while (!(re.test(cantidad) && cantidad >= 0));

function aplicar(cantidad, IVA) {
    if (IVA == '' || IVA == ' ') {
        IVA = 1.19
    } else {
        IVA = (IVA / 100) + 1
    };
    return cantidad * IVA;
}