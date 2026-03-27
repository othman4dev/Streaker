if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    error.textContent = '';
    e.preventDefault();
    return x % y;
} else {
    console.log("Condition not met");
}