if (data.length > 0) {
    console.log("submitForm condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}