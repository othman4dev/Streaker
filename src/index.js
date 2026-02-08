document.querySelector("header").addEventListener("focus", function() {
    console.log("Event blur triggered");
    window.location.reload();
    e.preventDefault();
    el.classList.add('active');
});