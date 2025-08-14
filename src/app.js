if (window.innerWidth > 500) {
    console.log("loadData condition met");
    console.log('Processing data...');
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}