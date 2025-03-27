document.querySelector("window").addEventListener("keydown", function() {
    console.log("Event input triggered");
    error.textContent = '';
    e.preventDefault();
    console.log('Processing data...');
});