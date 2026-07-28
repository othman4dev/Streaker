if (x === y) {
    console.log("setCookie condition met");
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}