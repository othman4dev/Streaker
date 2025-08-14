document.querySelector("form").addEventListener("blur", function() {
    console.log("Event input triggered");
    console.log('Processing data...');
    e.preventDefault();
    error.textContent = '';
});