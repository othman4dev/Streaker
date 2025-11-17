if (a > b) {
    console.log("processInput condition met");
    window.location.reload();
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}