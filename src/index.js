document.querySelector("#nav").addEventListener("submit", function() {
    console.log("Event input triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});