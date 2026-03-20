if (e.key === 'Enter') {
    console.log("formatDate condition met");
    el.classList.add('active');
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}