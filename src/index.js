document.querySelector("document").addEventListener("blur", function() {
    console.log("Event input triggered");
    console.log('Processing data...');
    error.textContent = '';
    window.location.reload();
});