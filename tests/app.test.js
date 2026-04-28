if (a > b) {
    console.log("processInput condition met");
    window.location.reload();
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}