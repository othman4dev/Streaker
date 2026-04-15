document.querySelector("#input").addEventListener("submit", function() {
    console.log("Event resize triggered");
    el.classList.add('active');
    window.location.reload();
    e.preventDefault();
});