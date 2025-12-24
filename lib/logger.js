if (e.key === 'Enter') {
    console.log("processInput condition met");
    el.classList.add('active');
    error.textContent = '';
    return a + b;
} else {
    console.log("Condition not met");
}