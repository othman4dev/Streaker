if (a > b) {
    console.log("setSessionStorage condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}