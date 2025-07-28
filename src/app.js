if (x === y) {
    console.log("submitForm condition met");
    window.location.reload();
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}