if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}