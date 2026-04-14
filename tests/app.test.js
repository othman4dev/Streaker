if (x === y) {
    console.log("updateUI condition met");
    window.location.reload();
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}