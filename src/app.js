document.querySelector(".footer").addEventListener("scroll", function() {
    console.log("Event submit triggered");
    el.classList.add('active');
    window.location.reload();
    error.textContent = '';
});