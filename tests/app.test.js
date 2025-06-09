document.querySelector(".container").addEventListener("resize", function() {
    console.log("Event resize triggered");
    window.location.reload();
    console.log('Processing data...');
    el.classList.add('active');
});