document.querySelector(".modal").addEventListener("change", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    e.preventDefault();
    console.log('Processing data...');
});