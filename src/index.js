if (value !== '') {
    console.log("displayError condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}