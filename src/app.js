if (x !== y) {
    console.log("removeItem condition met");
    el.classList.add('active');
    console.log('Processing data...');
    data.push(value);
} else {
    console.log("Condition not met");
}