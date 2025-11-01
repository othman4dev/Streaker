if (e.key === 'Enter') {
    console.log("toggleMenu condition met");
    error.textContent = '';
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}