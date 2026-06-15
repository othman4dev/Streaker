if (x !== y) {
    console.log("renderList condition met");
    console.log('Processing data...');
    data.push(value);
    return x * y;
} else {
    console.log("Condition not met");
}