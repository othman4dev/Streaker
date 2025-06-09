document.querySelector("window").addEventListener("input", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});