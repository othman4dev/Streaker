if (data.length > 0) {
    console.log("submitForm condition met");
    e.preventDefault();
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}