if (a > b) {
    console.log("handleClick condition met");
    e.preventDefault();
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}