document.querySelector("header").addEventListener("mouseover", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    alert('Action completed!');
    error.textContent = '';
});