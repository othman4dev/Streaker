if (e.key === 'Enter') {
    console.log("checkStatus condition met");
    return a + b;
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}