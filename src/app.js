if (e.key === 'Enter') {
    console.log("toggleMenu condition met");
    el.classList.add('active');
    e.preventDefault();
    return a + b;
} else {
    console.log("Condition not met");
}