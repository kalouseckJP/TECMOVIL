const brs = [1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 4.3, 4.7, 5.0, 5.3, 5.7, 6.0, 6.3, 6.7, 7.0, 7.3, 7.7, 8.0, 8.3, 8.7, 9.0, 9.3, 9.7, 10.0, 10.3, 10.7, 11.0, 11.3, 11.7];

const teclaEnter = document.getElementsByClassName("brInput")[0];
teclaEnter.addEventListener("keyup", ({key})=>{
    if (key === "Enter"){
        submit()
    }
});

const checkbox = document.getElementById('chkRangeI');
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.getElementById('chkSelect').hidden = false
    } else {
        document.getElementById('chkSelect').hidden = true
    }
});

function submit(){
    const x = document.querySelectorAll('li').forEach(el => {if(!!el) el.remove()})
    if(x) x.remove();
    const rango = document.getElementById('chkRangeI').checked
    const min = document.getElementById('minSelectValue').value
    const max = document.getElementById('maxSelectValue').value
    const cantVeh = document.getElementById('chkSelect').value
    if(rango){
        for (let index = 0; index < cantVeh; index++) {
            const node = document.createElement('li');
            let seleccionado = Math.floor(Math.random() * (max - min + 1)) + parseInt(min)
            node.appendChild(document.createTextNode(brs[seleccionado]));
            document.querySelector('ul').appendChild(node)
        }
    }else{
        const node = document.createElement('li');
        let seleccionado = Math.floor(Math.random() * (max - min + 1)) + parseInt(min)
        node.appendChild(document.createTextNode(brs[seleccionado]));
        document.querySelector('ul').appendChild(node)
    }
}

function removeIfExists (selector) {
    var x = document.querySelector('li')
    if (x) x.remove()
  }
