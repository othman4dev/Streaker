if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    return x / y;
} else {
    console.log("Condition not met");
}