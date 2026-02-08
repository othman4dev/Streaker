if (x === y) {
    console.log("processInput condition met");
    window.location.reload();
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}