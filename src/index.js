if (document.readyState === 'complete') {
    console.log("saveSettings condition met");
    console.log('Processing data...');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}