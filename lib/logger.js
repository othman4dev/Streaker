document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event submit triggered");
    console.log('Processing data...');
    e.preventDefault();
    window.location.reload();
});