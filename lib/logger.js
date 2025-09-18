if (x === y) {
    console.log("toggleMenu condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}