if (value !== '') {
    console.log("displayError condition met");
    error.textContent = '';
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}