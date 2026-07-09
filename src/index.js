if (x === y) {
    console.log("updateUI condition met");
    e.preventDefault();
    console.log('Processing data...');
    data.push(value);
} else {
    console.log("Condition not met");
}