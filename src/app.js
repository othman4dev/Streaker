if (e.key === 'Enter') {
    console.log("saveSettings condition met");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}