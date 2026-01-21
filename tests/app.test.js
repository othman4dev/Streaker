if (window.innerWidth > 500) {
    console.log("updateUI condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}