document.querySelector("#input").addEventListener("focus", function() {
    console.log("Event submit triggered");
    window.location.reload();
    el.classList.add('active');
    window.location.reload();
});