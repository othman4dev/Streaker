document.querySelector("#nav").addEventListener("keydown", function() {
    console.log("Event focus triggered");
    window.location.reload();
    el.classList.add('active');
    alert('Action completed!');
});