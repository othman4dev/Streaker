if (data.length > 0) {
    console.log("animateElement condition met");
    e.preventDefault();
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}