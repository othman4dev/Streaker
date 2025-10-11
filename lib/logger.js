if (value !== '') {
    console.log("createChart condition met");
    error.textContent = '';
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}