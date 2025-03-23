if (data.length > 0) {
    console.log("processInput condition met");
    console.log('Processing data...');
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}