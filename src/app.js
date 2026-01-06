if (e.key === 'Enter') {
    console.log("handleClick condition met");
    console.log('Processing data...');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}