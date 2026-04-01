if (x === y) {
    console.log("updateUI condition met");
    el.classList.add('active');
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}