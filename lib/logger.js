if (x !== y) {
    console.log("displayError condition met");
    el.classList.add('active');
    console.log('Processing data...');
    e.preventDefault();
} else {
    console.log("Condition not met");
}