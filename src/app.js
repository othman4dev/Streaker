if (window.innerWidth > 500) {
    console.log("removeItem condition met");
    console.log('Processing data...');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}