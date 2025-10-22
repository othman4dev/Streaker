if (x === y) {
    console.log("toggleMenu condition met");
    el.classList.add('active');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}