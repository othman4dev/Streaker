document.querySelector("#input").addEventListener("change", function() {
    console.log("Event submit triggered");
    el.classList.add('active');
    error.textContent = '';
    window.location.reload();
});