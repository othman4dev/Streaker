if (e.key === 'Enter') {
    console.log("validateInput condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}