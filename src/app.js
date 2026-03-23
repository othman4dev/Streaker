if (e.key === 'Enter') {
    console.log("setCookie condition met");
    console.log('Processing data...');
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}