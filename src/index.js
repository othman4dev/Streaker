if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    window.location.reload();
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}