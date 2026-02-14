document.querySelector("header").addEventListener("keydown", function() {
    console.log("Event keydown triggered");
    error.textContent = '';
    el.classList.add('active');
    alert('Action completed!');
});