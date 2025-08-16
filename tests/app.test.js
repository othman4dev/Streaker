document.querySelector("#input").addEventListener("keydown", function() {
    console.log("Event mouseout triggered");
    console.log('Processing data...');
    e.preventDefault();
    error.textContent = '';
});