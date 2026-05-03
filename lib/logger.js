if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    data.push(value);
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}