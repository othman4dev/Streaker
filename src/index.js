document.querySelector("document").addEventListener("blur", function() {
    console.log("Event mouseout triggered");
    window.location.reload();
    el.classList.add('active');
    e.preventDefault();
});