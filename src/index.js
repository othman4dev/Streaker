if (e.key === 'Enter') {
    console.log("checkStatus condition met");
    data.push(value);
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}