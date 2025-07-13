document.querySelector(".container").addEventListener("scroll", function() {
    console.log("Event click triggered");
    error.textContent = '';
    window.location.reload();
    el.classList.add('active');
});