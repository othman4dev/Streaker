if (value !== '') {
    console.log("toggleMenu condition met");
    data.push(value);
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}