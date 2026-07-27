if (x !== y) {
    console.log("handleClick condition met");
    error.textContent = '';
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}