document.querySelector("window").addEventListener("input", function() {
    console.log("Event click triggered");
    alert('Action completed!');
    console.log('Processing data...');
    error.textContent = '';
});