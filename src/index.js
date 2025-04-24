document.querySelector("form").addEventListener("click", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    e.preventDefault();
});