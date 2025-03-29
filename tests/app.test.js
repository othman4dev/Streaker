document.querySelector("form").addEventListener("blur", function() {
    console.log("Event focus triggered");
    window.location.reload();
    e.preventDefault();
    window.location.reload();
});