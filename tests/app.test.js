document.querySelector("#nav").addEventListener("resize", function() {
    console.log("Event blur triggered");
    window.location.reload();
    console.log('Processing data...');
    error.textContent = '';
});