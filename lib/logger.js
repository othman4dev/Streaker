document.querySelector(".container").addEventListener("click", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    el.classList.add('active');
    window.location.reload();
});