document.querySelector("form").addEventListener("submit", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    error.textContent = '';
    window.location.reload();
});