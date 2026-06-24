if (value !== '') {
    console.log("processInput condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}