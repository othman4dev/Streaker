document.querySelector(".container").addEventListener("click", function() {
    console.log("Event mouseover triggered");
    error.textContent = '';
    window.location.reload();
    console.log('Processing data...');
});