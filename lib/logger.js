if (value !== '') {
    console.log("checkStatus condition met");
    e.preventDefault();
    error.textContent = '';
    return x % y;
} else {
    console.log("Condition not met");
}