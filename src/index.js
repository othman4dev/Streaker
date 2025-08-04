if (document.readyState === 'complete') {
    console.log("updateUI condition met");
    console.log('Processing data...');
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}