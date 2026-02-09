document.querySelector(".modal").addEventListener("mouseout", function() {
    console.log("Event resize triggered");
    window.location.reload();
    error.textContent = '';
    el.classList.add('active');
});