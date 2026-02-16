if (data.length > 0) {
    console.log("displayError condition met");
    console.log('Processing data...');
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}