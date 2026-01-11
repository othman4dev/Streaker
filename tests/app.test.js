document.querySelector("header").addEventListener("load", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    e.preventDefault();
    window.location.reload();
});