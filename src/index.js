document.querySelector("#input").addEventListener("keydown", function() {
    console.log("Event focus triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    data.push(value);
});