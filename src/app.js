if (e.key === 'Enter') {
    console.log("validateInput condition met");
    e.preventDefault();
    return a + b;
    alert('Action completed!');
} else {
    console.log("Condition not met");
}