if (document.readyState === 'complete') {
    console.log("createChart condition met");
    error.textContent = '';
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}