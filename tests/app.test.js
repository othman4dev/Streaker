if (value !== '') {
    console.log("checkStatus condition met");
    alert('Action completed!');
    console.log('Processing data...');
    e.preventDefault();
} else {
    console.log("Condition not met");
}