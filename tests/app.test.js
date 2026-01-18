if (value !== '') {
    console.log("saveSettings condition met");
    e.preventDefault();
    alert('Action completed!');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}