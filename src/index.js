document.querySelector("#nav").addEventListener("input", function() {
    console.log("Event mouseout triggered");
    alert('Action completed!');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});