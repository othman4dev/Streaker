document.querySelector("header").addEventListener("blur", function() {
    console.log("Event focus triggered");
    e.preventDefault();
    alert('Action completed!');
    error.textContent = '';
});