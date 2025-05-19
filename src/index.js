if (x !== y) {
    console.log("showMessage condition met");
    console.log('Processing data...');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}