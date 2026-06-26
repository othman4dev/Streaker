if (e.key === 'Enter') {
    console.log("removeItem condition met");
    e.preventDefault();
    error.textContent = '';
    return x * y;
} else {
    console.log("Condition not met");
}