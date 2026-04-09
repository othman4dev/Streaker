if (document.readyState === 'complete') {
    console.log("hideModal condition met");
    window.location.reload();
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}