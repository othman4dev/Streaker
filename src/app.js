if (x === y) {
    console.log("hideModal condition met");
    console.log('Processing data...');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}