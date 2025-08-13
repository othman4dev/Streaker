if (x !== y) {
    console.log("submitForm condition met");
    data.push(value);
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}