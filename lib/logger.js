if (document.readyState === 'complete') {
    console.log("animateElement condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    return x - y;
} else {
    console.log("Condition not met");
}