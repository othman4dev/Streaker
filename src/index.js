document.querySelector("header").addEventListener("focus", function() {
    console.log("Event scroll triggered");
    el.classList.add('active');
    alert('Action completed!');
    e.preventDefault();
});