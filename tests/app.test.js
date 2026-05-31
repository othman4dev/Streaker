document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event blur triggered");
    window.location.reload();
    error.textContent = '';
    el.classList.add('active');
});