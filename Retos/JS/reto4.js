function calcular(form) {
    const name = form.inName.value;
    const weight = form.inWe.value;
    const height = form.inHei.value;
    const age = form.inAge.value;
    const gender = form.selGend.value;
    const phActivity = form.selAct.value;

    if (errores(name, weight, height, age, gender, phActivity)) {
        document.getElementById('outDiv').style.display = 'none'
    } else {
        const IMC = Math.trunc((weight / (height ** 2)) * 10) / 10
        const GED = phActivity * weight

        document.getElementBycl('errorName').style.display = 'none'
        document.getElementById('errorWe').style.display = 'none'
        document.getElementById('errorHei').style.display = 'none'
        document.getElementById('errorAge').style.display = 'none'
        document.getElementById('errorGend').style.display = 'none'
        document.getElementById('errorAct').style.display = 'none'

        document.getElementById('outDiv').style.display = 'block';
        document.getElementById('hResultados').innerHTML = `Resultados de ${name}`;
        document.getElementById('outIMC').innerHTML = IMC;
        document.getElementById('outGED').innerHTML = `${GED} kcal`;

        if (IMC < 18.5) {
            document.getElementById('outClas').innerHTML = 'Bajo Peso'
            document.getElementById('outEN').innerHTML = 'Necesita atención especializada'
        } else if (IMC < 24.9) {
            document.getElementById('outClas').innerHTML = 'Normal'
            document.getElementById('outEN').innerHTML = 'Estado nutricional adecuado'
        } else if (IMC < 29.9) {
            document.getElementById('outClas').innerHTML = 'Sobrepeso'
            document.getElementById('outEN').innerHTML = 'Necesita atención especializada'
        } else {
            document.getElementById('outClas').innerHTML = 'Obesidad'
            document.getElementById('outEN').innerHTML = 'Necesita atención especializada'
        }
    }
}

function errores(name, weight, height, age, gender, phActivity) {
    let x = 0;

    if (comprobarVacios(name, 'errorName')) x++;
    if (comprobarVacios(weight, 'errorWe')) x++;
    if (comprobarVacios(height, 'errorHei')) x++;
    if (comprobarVacios(age, 'errorAge')) x++;

    if (gender == 0) {
        document.getElementById('errorGend').style.display = 'flex'
        x++;
    } else {
        document.getElementById('errorGend').style.display = 'none'
    }

    if (phActivity == 0) {
        document.getElementById('errorAct').style.display = 'flex'
        x++;
    } else {
        document.getElementById('errorAct').style.display = 'none'
    }

    return x > 0
}

function comprobarVacios(elemento, idElemento) {
    if (elemento.replace(' ', '') == '') {
        document.getElementById(idElemento).style.display = 'flex';
        return true;
    } else {
        document.getElementById(idElemento).style.display = 'none';
        return false;
    }
}