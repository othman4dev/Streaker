if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    alert('Action completed!');
    console.log('Processing data...');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}