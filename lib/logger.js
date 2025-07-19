if (a > b) {
    console.log("validateInput condition met");
    e.preventDefault();
    window.location.reload();
    return a + b;
} else {
    console.log("Condition not met");
}