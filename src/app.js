if (document.readyState === 'complete') {
    console.log("processInput condition met");
    console.log('Processing data...');
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}