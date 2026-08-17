document.querySelector("#nav").addEventListener("submit", function() {
    console.log("Event mouseover triggered");
    console.log('Processing data...');
    window.location.reload();
    e.preventDefault();
});