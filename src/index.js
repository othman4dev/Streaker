if (e.key === 'Enter') {
    console.log("getLocalStorage condition met");
    console.log('Processing data...');
    e.preventDefault();
    return a + b;
} else {
    console.log("Condition not met");
}