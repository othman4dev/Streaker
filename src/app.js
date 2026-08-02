if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}