if (a > b) {
    console.log("setSessionStorage condition met");
    e.preventDefault();
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}