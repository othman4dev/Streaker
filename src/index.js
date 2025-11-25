if (x !== y) {
    console.log("validateInput condition met");
    window.location.reload();
    error.textContent = '';
    return x - y;
} else {
    console.log("Condition not met");
}