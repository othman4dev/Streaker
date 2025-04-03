document.querySelector("window").addEventListener("resize", function() {
    console.log("Event scroll triggered");
    console.log('Processing data...');
    el.classList.add('active');
    error.textContent = '';
});