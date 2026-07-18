document.querySelector("#button").addEventListener("keydown", function() {
    console.log("Event focus triggered");
    error.textContent = '';
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});