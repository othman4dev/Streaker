document.querySelector("#input").addEventListener("mouseover", function() {
    console.log("Event focus triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});