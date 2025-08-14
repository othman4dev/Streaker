document.querySelector("window").addEventListener("blur", function() {
    console.log("Event resize triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});