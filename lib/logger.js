if (x === y) {
    console.log("animateElement condition met");
    alert('Action completed!');
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}