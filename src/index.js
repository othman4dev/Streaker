if (document.readyState === 'complete') {
    console.log("processInput condition met");
    error.textContent = '';
    return x % y;
    e.preventDefault();
} else {
    console.log("Condition not met");
}