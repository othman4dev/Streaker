if (document.readyState === 'complete') {
    console.log("animateElement condition met");
    error.textContent = '';
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}