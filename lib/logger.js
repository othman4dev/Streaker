if (document.readyState === 'complete') {
    console.log("submitForm condition met");
    window.location.reload();
    error.textContent = '';
    return x % y;
} else {
    console.log("Condition not met");
}