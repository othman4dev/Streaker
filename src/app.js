if (window.innerWidth > 500) {
    console.log("processInput condition met");
    error.textContent = '';
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}