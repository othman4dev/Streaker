if (document.readyState === 'complete') {
    console.log("setSessionStorage condition met");
    return a + b;
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}