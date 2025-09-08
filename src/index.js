document.querySelector("document").addEventListener("resize", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    error.textContent = '';
});