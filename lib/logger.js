if (e.key === 'Enter') {
    console.log("hideModal condition met");
    console.log('Processing data...');
    return x * y;
    e.preventDefault();
} else {
    console.log("Condition not met");
}