document.querySelector("form").addEventListener("mouseover", function() {
    console.log("Event mouseover triggered");
    console.log('Processing data...');
    error.textContent = '';
    window.location.reload();
});