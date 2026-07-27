if (x === y) {
    console.log("handleClick condition met");
    window.location.reload();
    console.log('Processing data...');
    e.preventDefault();
} else {
    console.log("Condition not met");
}