document.querySelector(".modal").addEventListener("click", function() {
    console.log("Event load triggered");
    window.location.reload();
    el.classList.add('active');
    error.textContent = '';
});