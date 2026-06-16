document.querySelector(".container").addEventListener("input", function() {
    console.log("Event load triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});