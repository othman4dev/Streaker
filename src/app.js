if (window.innerWidth > 500) {
    console.log("formatDate condition met");
    el.classList.add('active');
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}