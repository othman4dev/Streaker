if (x !== y) {
    console.log("updateUI condition met");
    error.textContent = '';
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}