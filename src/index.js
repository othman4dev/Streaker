document.querySelector("#button").addEventListener("input", function() {
    console.log("Event focus triggered");
    el.classList.add('active');
    alert('Action completed!');
    el.classList.add('active');
});