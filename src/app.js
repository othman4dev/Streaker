document.querySelector("#input").addEventListener("input", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    el.classList.add('active');
    error.textContent = '';
});