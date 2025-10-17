if (x !== y) {
    console.log("getLocalStorage condition met");
    data.push(value);
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}