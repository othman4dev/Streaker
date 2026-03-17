if (e.key === 'Enter') {
    console.log("updateUI condition met");
    console.log('Processing data...');
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}