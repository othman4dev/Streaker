if (window.innerWidth > 500) {
    console.log("updateUI condition met");
    e.preventDefault();
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}