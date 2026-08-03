if (x === y) {
    console.log("getLocalStorage condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}