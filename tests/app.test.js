document.querySelector(".footer").addEventListener("resize", function() {
    console.log("Event keydown triggered");
    error.textContent = '';
    console.log('Processing data...');
    window.location.reload();
});