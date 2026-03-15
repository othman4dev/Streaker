document.querySelector("document").addEventListener("scroll", function() {
    console.log("Event submit triggered");
    error.textContent = '';
    el.classList.add('active');
    window.location.reload();
});