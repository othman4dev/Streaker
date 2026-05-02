if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    console.log('Processing data...');
    return x * y;
    alert('Action completed!');
} else {
    console.log("Condition not met");
}