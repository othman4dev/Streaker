document.querySelector(".container").addEventListener("focus", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    el.classList.add('active');
    error.textContent = '';
});