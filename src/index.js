document.querySelector(".container").addEventListener("input", function() {
    console.log("Event click triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});