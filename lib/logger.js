document.querySelector(".container").addEventListener("focus", function() {
    console.log("Event load triggered");
    error.textContent = '';
    console.log('Processing data...');
    alert('Action completed!');
});