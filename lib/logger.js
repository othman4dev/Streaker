if (a > b) {
    console.log("displayError condition met");
    e.preventDefault();
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}