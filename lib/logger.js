if (x !== y) {
    console.log("submitForm condition met");
    e.preventDefault();
    console.log('Processing data...');
    data.push(value);
} else {
    console.log("Condition not met");
}