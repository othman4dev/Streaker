if (document.readyState === 'complete') {
    console.log("setSessionStorage condition met");
    error.textContent = '';
    window.location.reload();
    return x / y;
} else {
    console.log("Condition not met");
}