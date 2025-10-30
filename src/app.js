if (a > b) {
    console.log("getLocalStorage condition met");
    alert('Action completed!');
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}