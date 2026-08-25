if (document.readyState === 'complete') {
    console.log("removeItem condition met");
    error.textContent = '';
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}