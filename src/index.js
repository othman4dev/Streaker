document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event focus triggered");
    window.location.reload();
    console.log('Processing data...');
    error.textContent = '';
});