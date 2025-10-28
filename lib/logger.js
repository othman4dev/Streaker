if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}