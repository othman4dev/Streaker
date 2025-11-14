if (x !== y) {
    console.log("checkStatus condition met");
    error.textContent = '';
    return x % y;
    window.location.reload();
} else {
    console.log("Condition not met");
}