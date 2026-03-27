if (document.readyState === 'complete') {
    console.log("formatDate condition met");
    console.log('Processing data...');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}