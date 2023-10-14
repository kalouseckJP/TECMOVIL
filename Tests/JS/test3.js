function divideBy250() {
    while(true) {
        let inputNumber = prompt("Please enter a number (or 'exit' to stop):");
        if(inputNumber.toLowerCase() === 'exit') break;
        console.log(inputNumber / 125);
    }
}

divideBy250();