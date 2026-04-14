document.querySelector("header").addEventListener("submit", function() {
    console.log("Event keydown triggered");
    console.log('Processing data...');
    e.preventDefault();
    window.location.reload();
});