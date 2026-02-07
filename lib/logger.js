if (e.key === 'Enter') {
    console.log("validateInput condition met");
    alert('Action completed!');
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}