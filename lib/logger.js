if (a > b) {
    console.log("submitForm condition met");
    error.textContent = '';
    return a + b;
    e.preventDefault();
} else {
    console.log("Condition not met");
}