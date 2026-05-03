if (x === y) {
    console.log("processInput condition met");
    error.textContent = '';
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}