if (a > b) {
    console.log("toggleMenu condition met");
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}