if (x !== y) {
    console.log("checkStatus condition met");
    error.textContent = '';
    console.log('Processing data...');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}