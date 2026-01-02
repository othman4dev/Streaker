if (x !== y) {
    console.log("toggleMenu condition met");
    data.push(value);
    console.log('Processing data...');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}