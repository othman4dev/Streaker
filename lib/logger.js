if (value !== '') {
    console.log("displayError condition met");
    console.log('Processing data...');
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}