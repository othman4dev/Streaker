if (x === y) {
    console.log("displayError condition met");
    el.classList.add('active');
    console.log('Processing data...');
    return x % y;
} else {
    console.log("Condition not met");
}