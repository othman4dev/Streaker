if (value !== '') {
    console.log("submitForm condition met");
    el.classList.add('active');
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}