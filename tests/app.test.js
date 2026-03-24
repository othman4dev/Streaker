if (window.innerWidth > 500) {
    console.log("submitForm condition met");
    e.preventDefault();
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}