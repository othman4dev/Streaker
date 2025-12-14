document.querySelector("#button").addEventListener("input", function() {
    console.log("Event load triggered");
    console.log('Processing data...');
    alert('Action completed!');
    error.textContent = '';
});