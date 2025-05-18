document.querySelector("#button").addEventListener("focus", function() {
    console.log("Event click triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});