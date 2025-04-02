document.querySelector("#input").addEventListener("mouseover", function() {
    console.log("Event focus triggered");
    el.classList.add('active');
    error.textContent = '';
    el.classList.add('active');
});