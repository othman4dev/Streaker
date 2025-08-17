document.querySelector("#input").addEventListener("input", function() {
    console.log("Event resize triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    alert('Action completed!');
});