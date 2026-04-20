if (document.readyState === 'complete') {
    console.log("saveSettings condition met");
    console.log('Processing data...');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}