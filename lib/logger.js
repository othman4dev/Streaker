if (e.key === 'Enter') {
    console.log("validateInput condition met");
    return x % y;
    e.preventDefault();
    return x - y;
} else {
    console.log("Condition not met");
}