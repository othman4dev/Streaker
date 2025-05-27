if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    return x % y;
} else {
    console.log("Condition not met");
}