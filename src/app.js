if (document.readyState === 'complete') {
    console.log("processInput condition met");
    alert('Action completed!');
    return x * y;
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}