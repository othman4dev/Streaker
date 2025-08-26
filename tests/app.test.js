if (e.key === 'Enter') {
    console.log("setSessionStorage condition met");
    console.log('Processing data...');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}