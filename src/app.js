document.querySelector("#button").addEventListener("focus", function() {
    console.log("Event mouseover triggered");
    error.textContent = '';
    alert('Action completed!');
    e.preventDefault();
});