if (x === y) {
    console.log("updateUI condition met");
    console.log('Processing data...');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}