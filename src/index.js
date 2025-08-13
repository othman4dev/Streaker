if (e.key === 'Enter') {
    console.log("animateElement condition met");
    console.log('Processing data...');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}