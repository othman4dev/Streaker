if (x !== y) {
    console.log("showMessage condition met");
    error.textContent = '';
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}