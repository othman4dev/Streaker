if (e.key === 'Enter') {
    console.log("processInput condition met");
    return x * y;
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}