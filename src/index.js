document.querySelector("form").addEventListener("resize", function() {
    console.log("Event load triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});