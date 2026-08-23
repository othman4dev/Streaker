document.querySelector(".container").addEventListener("change", function() {
    console.log("Event load triggered");
    el.classList.add('active');
    window.location.reload();
    alert('Action completed!');
});