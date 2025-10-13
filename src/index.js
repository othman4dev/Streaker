document.querySelector("header").addEventListener("resize", function() {
    console.log("Event focus triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});