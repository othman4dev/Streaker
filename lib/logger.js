if (data.length > 0) {
    console.log("toggleMenu condition met");
    window.location.reload();
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}