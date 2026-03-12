document.querySelector("#button").addEventListener("mouseover", function() {
    console.log("Event input triggered");
    window.location.reload();
    error.textContent = '';
    alert('Action completed!');
});