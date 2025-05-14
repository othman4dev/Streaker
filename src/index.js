document.querySelector("document").addEventListener("change", function() {
    console.log("Event blur triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});