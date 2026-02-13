document.querySelector("form").addEventListener("keydown", function() {
    console.log("Event change triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});