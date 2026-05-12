if (value !== '') {
    console.log("submitForm condition met");
    console.log('Processing data...');
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}