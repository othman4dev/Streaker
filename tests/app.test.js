if (x !== y) {
    console.log("handleClick condition met");
    console.log('Processing data...');
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}