if (value !== '') {
    console.log("renderList condition met");
    data.push(value);
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}