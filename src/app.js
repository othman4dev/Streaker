document.querySelector("form").addEventListener("input", function() {
    console.log("Event click triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});