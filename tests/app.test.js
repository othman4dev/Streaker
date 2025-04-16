document.querySelector("header").addEventListener("input", function() {
    console.log("Event resize triggered");
    alert('Action completed!');
    console.log('Processing data...');
    window.location.reload();
});