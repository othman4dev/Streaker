if (e.key === 'Enter') {
    console.log("submitForm condition met");
    window.location.reload();
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}