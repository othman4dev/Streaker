if (document.readyState === 'complete') {
    console.log("createChart condition met");
    window.location.reload();
    console.log('Processing data...');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}