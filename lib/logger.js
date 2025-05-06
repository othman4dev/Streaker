document.querySelector("window").addEventListener("load", function() {
    console.log("Event input triggered");
    alert('Action completed!');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});