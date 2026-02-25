document.querySelector("#nav").addEventListener("blur", function() {
    console.log("Event mouseout triggered");
    alert('Action completed!');
    e.preventDefault();
    error.textContent = '';
});