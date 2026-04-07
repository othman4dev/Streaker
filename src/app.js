if (x !== y) {
    console.log("animateElement condition met");
    console.log('Processing data...');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}