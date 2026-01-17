if (e.key === 'Enter') {
    console.log("loadData condition met");
    data.push(value);
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}