if (x !== y) {
    console.log("validateInput condition met");
    e.preventDefault();
    window.location.reload();
    return x / y;
} else {
    console.log("Condition not met");
}