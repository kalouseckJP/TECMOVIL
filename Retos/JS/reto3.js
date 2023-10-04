const teclaEnter = document.getElementsByClassName("linea1")[0];
teclaEnter.addEventListener("keyup", ({key})=>{
    if (key === "Enter"){
        submit()
    }
});

function submit(){
    const input = document.getElementById('precioInput').value
    const porcentaje = document.getElementById('selectPropina').value
    if (input<=0 || input=='' || /[\d]+[.][\d]+/.test(input) || !/^[\d]+/.test(input)) {
        document.getElementById('propinaLabel').innerHTML = 'Ingrese un numero mayor a 0 sin decimales'    
        document.getElementById('totalPagar').style.display = 'none'
        document.getElementById('propinaLabel').style.display = 'block'
    }else{
        document.getElementById('propinaLabel').innerHTML = 'Propina: ' +'$' + calculo(porcentaje,input) + ' CLP'
        document.getElementById('totalPagar').innerHTML = 'Total a pagar: ' +'$' + (calculo(porcentaje,input)+parseInt(input)) + ' CLP';
        document.getElementById('propinaLabel').style.display = 'block'
        document.getElementById('totalPagar').style.display = 'block'
    }
};

function calculo(porcentaje, input){
    return Math.trunc(input*porcentaje);
};