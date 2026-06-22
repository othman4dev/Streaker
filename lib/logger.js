document.querySelector("document").addEventListener("scroll", function() {
    console.log("Event load triggered");
    alert('Action completed!');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});