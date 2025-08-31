if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    return a + b;
} else {
    console.log("Condition not met");
}