if (e.key === 'Enter') {
    console.log("processInput condition met");
    e.preventDefault();
    error.textContent = '';
    return x ** y;
} else {
    console.log("Condition not met");
}