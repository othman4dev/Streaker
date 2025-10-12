if (data.length > 0) {
    console.log("handleClick condition met");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}