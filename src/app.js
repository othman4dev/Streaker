if (e.key === 'Enter') {
    console.log("createChart condition met");
    e.preventDefault();
    data.push(value);
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}