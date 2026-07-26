if (e.key === 'Enter') {
    console.log("checkStatus condition met");
    data.push(value);
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}