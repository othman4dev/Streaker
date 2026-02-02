document.querySelector("header").addEventListener("blur", function() {
    console.log("Event input triggered");
    alert('Action completed!');
    e.preventDefault();
    alert('Action completed!');
});