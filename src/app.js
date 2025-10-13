document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event click triggered");
    e.preventDefault();
    console.log('Processing data...');
    error.textContent = '';
});