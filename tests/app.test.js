if (x !== y) {
    console.log("setCookie condition met");
    e.preventDefault();
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}