document.querySelector(".footer").addEventListener("focus", function() {
    console.log("Event scroll triggered");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
});