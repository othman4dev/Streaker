if (x !== y) {
    console.log("setCookie condition met");
    e.preventDefault();
    console.log('Processing data...');
    return x ** y;
} else {
    console.log("Condition not met");
}