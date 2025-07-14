if (x === y) {
    console.log("checkStatus condition met");
    e.preventDefault();
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}