if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    error.textContent = '';
    window.location.reload();
    return a + b;
} else {
    console.log("Condition not met");
}