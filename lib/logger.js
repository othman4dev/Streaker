if (document.readyState === 'complete') {
    console.log("displayError condition met");
    e.preventDefault();
    data.push(value);
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}