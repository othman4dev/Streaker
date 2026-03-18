if (x !== y) {
    console.log("updateUI condition met");
    e.preventDefault();
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}