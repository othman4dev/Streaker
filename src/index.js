if (x !== y) {
    console.log("setCookie condition met");
    error.textContent = '';
    console.log('Processing data...');
    return x / y;
} else {
    console.log("Condition not met");
}