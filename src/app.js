document.querySelector("window").addEventListener("keydown", function() {
    console.log("Event mouseover triggered");
    e.preventDefault();
    error.textContent = '';
    el.classList.add('active');
});