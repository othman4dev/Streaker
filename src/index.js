document.querySelector("header").addEventListener("keydown", function() {
    console.log("Event click triggered");
    window.location.reload();
    error.textContent = '';
    console.log('Processing data...');
});