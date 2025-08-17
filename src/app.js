if (document.readyState === 'complete') {
    console.log("removeItem condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}