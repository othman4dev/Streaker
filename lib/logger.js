document.querySelector("form").addEventListener("submit", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});