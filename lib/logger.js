if (window.innerWidth > 500) {
    console.log("submitForm condition met");
    error.textContent = '';
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}