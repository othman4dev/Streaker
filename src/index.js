document.querySelector("#button").addEventListener("resize", function() {
    console.log("Event keydown triggered");
    alert('Action completed!');
    el.classList.add('active');
    error.textContent = '';
});