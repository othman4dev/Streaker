document.querySelector("#button").addEventListener("submit", function() {
    console.log("Event focus triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});