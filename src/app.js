if (x !== y) {
    console.log("checkStatus condition met");
    error.textContent = '';
    e.preventDefault();
    return x % y;
} else {
    console.log("Condition not met");
}