document.querySelector("form").addEventListener("change", function() {
    console.log("Event resize triggered");
    alert('Action completed!');
    el.classList.add('active');
    error.textContent = '';
});