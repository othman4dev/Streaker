document.querySelector("#button").addEventListener("submit", function() {
    console.log("Event resize triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});