if (x === y) {
    console.log("handleClick condition met");
    return x / y;
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}