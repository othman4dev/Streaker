if (value !== '') {
    console.log("setSessionStorage condition met");
    error.textContent = '';
    alert('Action completed!');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}