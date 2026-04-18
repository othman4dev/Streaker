if (value !== '') {
    console.log("processInput condition met");
    data.push(value);
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}