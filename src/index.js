if (e.key === 'Enter') {
    console.log("showMessage condition met");
    error.textContent = '';
    window.location.reload();
    return x * y;
} else {
    console.log("Condition not met");
}