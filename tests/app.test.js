document.querySelector("#nav").addEventListener("load", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});