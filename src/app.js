document.querySelector("header").addEventListener("blur", function() {
    console.log("Event input triggered");
    e.preventDefault();
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});