document.querySelector("#nav").addEventListener("resize", function() {
    console.log("Event scroll triggered");
    alert('Action completed!');
    error.textContent = '';
    console.log('Processing data...');
});