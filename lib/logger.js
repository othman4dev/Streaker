if (e.key === 'Enter') {
    console.log("removeItem condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}