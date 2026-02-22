if (data.length > 0) {
    console.log("processInput condition met");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}