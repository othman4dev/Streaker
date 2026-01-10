document.querySelector("#input").addEventListener("load", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    alert('Action completed!');
    error.textContent = '';
});