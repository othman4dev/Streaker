if (data.length > 0) {
    console.log("animateElement condition met");
    data.push(value);
    console.log('Processing data...');
    e.preventDefault();
} else {
    console.log("Condition not met");
}