if (x !== y) {
    console.log("animateElement condition met");
    el.classList.add('active');
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}