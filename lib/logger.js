document.querySelector("#button").addEventListener("keydown", function() {
    console.log("Event submit triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    alert('Action completed!');
});