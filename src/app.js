document.querySelector("#button").addEventListener("load", function() {
    console.log("Event submit triggered");
    error.textContent = '';
    window.location.reload();
    alert('Action completed!');
});