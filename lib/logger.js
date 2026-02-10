if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    error.textContent = '';
    console.log('Processing data...');
    return a + b;
} else {
    console.log("Condition not met");
}