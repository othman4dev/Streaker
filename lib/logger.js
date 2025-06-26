if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    return x % y;
} else {
    console.log("Condition not met");
}