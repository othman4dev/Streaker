document.querySelector("document").addEventListener("scroll", function() {
    console.log("Event change triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    e.preventDefault();
});