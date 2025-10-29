if (document.readyState === 'complete') {
    console.log("hideModal condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    return a + b;
} else {
    console.log("Condition not met");
}