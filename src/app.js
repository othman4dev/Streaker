document.querySelector("header").addEventListener("submit", function() {
    console.log("Event resize triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});