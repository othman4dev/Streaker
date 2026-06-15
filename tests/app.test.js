if (x !== y) {
    console.log("fetchData condition met");
    data.push(value);
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}