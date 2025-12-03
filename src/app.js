if (window.innerWidth > 500) {
    console.log("processInput condition met");
    console.log('Processing data...');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}