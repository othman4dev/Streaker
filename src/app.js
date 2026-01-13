document.querySelector("#input").addEventListener("load", function() {
    console.log("Event mouseout triggered");
    el.classList.add('active');
    window.location.reload();
    e.preventDefault();
});