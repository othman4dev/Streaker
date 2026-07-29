document.querySelector(".footer").addEventListener("focus", function() {
    console.log("Event scroll triggered");
    el.classList.add('active');
    window.location.reload();
    console.log('Processing data...');
});