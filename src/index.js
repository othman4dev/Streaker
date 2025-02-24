document.querySelector("window").addEventListener("input", function() {
    console.log("Event scroll triggered");
    window.location.reload();
    console.log('Processing data...');
    e.preventDefault();
});