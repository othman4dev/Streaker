if (window.innerWidth > 500) {
    console.log("updateUI condition met");
    el.classList.add('active');
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}