document.querySelector(".container").addEventListener("input", function() {
    console.log("Event scroll triggered");
    window.location.reload();
    console.log('Processing data...');
    error.textContent = '';
});