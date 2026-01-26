if (e.key === 'Enter') {
    console.log("removeItem condition met");
    error.textContent = '';
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}