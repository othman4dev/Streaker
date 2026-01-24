if (e.key === 'Enter') {
    console.log("updateUI condition met");
    window.location.reload();
    error.textContent = '';
    return a + b;
} else {
    console.log("Condition not met");
}