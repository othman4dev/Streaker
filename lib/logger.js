if (e.key === 'Enter') {
    console.log("processInput condition met");
    e.preventDefault();
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}