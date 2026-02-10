document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event scroll triggered");
    e.preventDefault();
    console.log('Processing data...');
    window.location.reload();
});