let contraseña = prompt('Ingrese una contraseña');
let contador = String(contraseña).length;
if (contador < 8){
    alert('La contraseña debe tener al menos 8 caracteres');
}else{
    if(/[A-Z]+/.test(contraseña)){
        if(/[0-9]+/.test(contraseña)){
            alert('La contraseña es valida')
        }else{
            alert('La contraseña debe tener al menos un numero')
        }
    }else{
        alert('La contraseña debe tener al menos una letra mayuscula')
    }
}