if (x !== y) {
    console.log("displayError condition met");
    console.log('Processing data...');
    return x / y;
    error.textContent = '';
} else {
    console.log("Condition not met");
}