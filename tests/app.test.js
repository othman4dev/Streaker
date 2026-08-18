if (e.key === 'Enter') {
    console.log("showMessage condition met");
    el.classList.add('active');
    data.push(value);
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}