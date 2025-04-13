if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    error.textContent = '';
    console.log('Processing data...');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}