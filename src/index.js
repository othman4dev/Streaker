document.querySelector("header").addEventListener("keydown", function() {
    console.log("Event focus triggered");
    data.push(value);
    error.textContent = '';
    window.location.reload();
});