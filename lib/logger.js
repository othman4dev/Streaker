document.querySelector("window").addEventListener("submit", function() {
    console.log("Event input triggered");
    el.classList.add('active');
    console.log('Processing data...');
    window.location.reload();
});