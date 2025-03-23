document.querySelector("header").addEventListener("input", function() {
    console.log("Event mouseover triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});