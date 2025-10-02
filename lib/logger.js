document.querySelector("#button").addEventListener("keydown", function() {
    console.log("Event keydown triggered");
    error.textContent = '';
    el.classList.add('active');
    error.textContent = '';
});