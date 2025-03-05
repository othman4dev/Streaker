if (a > b) {
    console.log("getLocalStorage condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}