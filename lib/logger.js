if (value !== '') {
    console.log("displayError condition met");
    e.preventDefault();
    return x * y;
    error.textContent = '';
} else {
    console.log("Condition not met");
}