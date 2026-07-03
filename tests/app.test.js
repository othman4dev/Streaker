document.querySelector("document").addEventListener("click", function() {
    console.log("Event input triggered");
    data.push(value);
    alert('Action completed!');
    window.location.reload();
});