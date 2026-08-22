document.querySelector(".modal").addEventListener("resize", function() {
    console.log("Event change triggered");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    alert('Action completed!');
});