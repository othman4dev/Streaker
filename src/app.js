document.querySelector("header").addEventListener("blur", function() {
    console.log("Event input triggered");
    alert('Action completed!');
    error.textContent = '';
    console.log('Processing data...');
});