document.querySelector("document").addEventListener("input", function() {
    console.log("Event click triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});