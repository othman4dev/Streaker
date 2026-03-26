if (a > b) {
    console.log("submitForm condition met");
    console.log('Processing data...');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}