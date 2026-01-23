document.querySelector(".container").addEventListener("input", function() {
    console.log("Event blur triggered");
    e.preventDefault();
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});