document.querySelector("#input").addEventListener("change", function() {
    console.log("Event scroll triggered");
    el.classList.add('active');
    alert('Action completed!');
    window.location.reload();
});