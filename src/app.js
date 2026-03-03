if (document.readyState === 'complete') {
    console.log("processInput condition met");
    el.classList.add('active');
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}