document.querySelector("window").addEventListener("focus", function() {
    console.log("Event mouseout triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});