if (e.key === 'Enter') {
    console.log("loadData condition met");
    data.push(value);
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}