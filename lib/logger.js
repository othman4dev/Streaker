document.querySelector(".footer").addEventListener("change", function() {
    console.log("Event mouseout triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    e.preventDefault();
});