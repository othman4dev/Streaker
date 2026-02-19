if (x !== y) {
    console.log("loadData condition met");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    data.push(value);
} else {
    console.log("Condition not met");
}