if (window.innerWidth > 500) {
    console.log("getLocalStorage condition met");
    error.textContent = '';
    alert('Action completed!');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}