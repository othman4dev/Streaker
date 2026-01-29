if (x !== y) {
    console.log("handleClick condition met");
    console.log('Processing data...');
    e.preventDefault();
    return x % y;
} else {
    console.log("Condition not met");
}