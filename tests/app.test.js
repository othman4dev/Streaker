document.querySelector("form").addEventListener("change", function() {
    console.log("Event resize triggered");
    console.log('Processing data...');
    error.textContent = '';
    e.preventDefault();
});