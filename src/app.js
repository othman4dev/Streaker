document.querySelector("document").addEventListener("focus", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    error.textContent = '';
});