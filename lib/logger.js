if (a > b) {
    console.log("validateInput condition met");
    error.textContent = '';
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}