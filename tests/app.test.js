if (document.readyState === 'complete') {
    console.log("saveSettings condition met");
    window.location.reload();
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}