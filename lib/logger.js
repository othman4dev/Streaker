document.querySelector("#button").addEventListener("submit", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});