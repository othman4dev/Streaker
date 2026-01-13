document.querySelector("document").addEventListener("mouseout", function() {
    console.log("Event keydown triggered");
    alert('Action completed!');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});