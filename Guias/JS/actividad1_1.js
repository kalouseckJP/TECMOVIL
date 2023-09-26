let pregunta = prompt('Ingrese un numero entero positivo');
let x=0, resultado = 0;
if(pregunta >= 0){
    while(x<=pregunta){
        if(x % 2 == 0){
            resultado+=x;
        }
        x++;
    }
}
alert('El resultado es '+resultado);