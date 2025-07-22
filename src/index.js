if (e.key === 'Enter') {
    console.log("displayError condition met");
    alert('Action completed!');
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}