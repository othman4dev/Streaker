if (x === y) {
    console.log("updateUI condition met");
    error.textContent = '';
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}