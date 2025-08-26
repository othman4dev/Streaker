if (e.key === 'Enter') {
    console.log("displayError condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}