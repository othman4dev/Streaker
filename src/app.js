document.querySelector("window").addEventListener("keydown", function() {
    console.log("Event change triggered");
    error.textContent = '';
    window.location.reload();
    console.log('Processing data...');
});