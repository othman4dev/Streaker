document.querySelector("#button").addEventListener("resize", function() {
    console.log("Event resize triggered");
    console.log('Processing data...');
    error.textContent = '';
    alert('Action completed!');
});