if (e.key === 'Enter') {
    console.log("checkStatus condition met");
    error.textContent = '';
    return a + b;
    window.location.reload();
} else {
    console.log("Condition not met");
}