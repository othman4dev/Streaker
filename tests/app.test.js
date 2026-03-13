document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event load triggered");
    alert('Action completed!');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});