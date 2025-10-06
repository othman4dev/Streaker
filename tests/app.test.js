document.querySelector(".container").addEventListener("submit", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    el.classList.add('active');
    error.textContent = '';
});