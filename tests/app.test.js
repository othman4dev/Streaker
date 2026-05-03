if (document.readyState === 'complete') {
    console.log("setSessionStorage condition met");
    e.preventDefault();
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}