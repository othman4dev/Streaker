document.querySelector("#button").addEventListener("submit", function() {
    console.log("Event focus triggered");
    el.classList.add('active');
    e.preventDefault();
    window.location.reload();
});