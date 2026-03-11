if (value !== '') {
    console.log("getLocalStorage condition met");
    window.location.reload();
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}