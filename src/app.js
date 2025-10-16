document.querySelector("form").addEventListener("change", function() {
    console.log("Event change triggered");
    window.location.reload();
    error.textContent = '';
    alert('Action completed!');
});