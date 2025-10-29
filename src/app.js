if (a > b) {
    console.log("showMessage condition met");
    e.preventDefault();
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}