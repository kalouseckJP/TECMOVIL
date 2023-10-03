let numero = prompt('Ingrese un numero');
alert(String(numero).match(/.+/));
if (isNaN(numero)){
    alert('No ingreso numeros')
}else{
    if(numero % 2 == 0){
        alert(numero + ' es un numero par')
    }else{
        alert(numero + ' no es par')
    }
}
