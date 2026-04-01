document.querySelector("header").addEventListener("click", function() {
    console.log("Event load triggered");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
});