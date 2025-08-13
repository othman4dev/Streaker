if (document.readyState === 'complete') {
    console.log("hideModal condition met");
    e.preventDefault();
    console.log('Processing data...');
    data.push(value);
} else {
    console.log("Condition not met");
}