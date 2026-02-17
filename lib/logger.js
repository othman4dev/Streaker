if (value !== '') {
    console.log("submitForm condition met");
    e.preventDefault();
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}