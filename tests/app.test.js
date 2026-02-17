if (x === y) {
    console.log("setSessionStorage condition met");
    console.log('Processing data...');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}