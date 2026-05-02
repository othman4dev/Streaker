document.querySelector("form").addEventListener("resize", function() {
    console.log("Event submit triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    e.preventDefault();
});