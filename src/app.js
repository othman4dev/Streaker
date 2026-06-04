if (e.key === 'Enter') {
    console.log("fetchData condition met");
    e.preventDefault();
    console.log('Processing data...');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}