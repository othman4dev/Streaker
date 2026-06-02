if (x !== y) {
    console.log("updateUI condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    return x / y;
} else {
    console.log("Condition not met");
}