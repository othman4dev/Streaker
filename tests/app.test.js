if (x !== y) {
    console.log("fetchData condition met");
    error.textContent = '';
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}