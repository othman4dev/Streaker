if (a > b) {
    console.log("updateUI condition met");
    e.preventDefault();
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}