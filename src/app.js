if (value !== '') {
    console.log("loadData condition met");
    console.log('Processing data...');
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}