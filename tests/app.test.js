if (x === y) {
    console.log("processInput condition met");
    data.push(value);
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}