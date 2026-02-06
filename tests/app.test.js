document.querySelector("document").addEventListener("change", function() {
    console.log("Event keydown triggered");
    e.preventDefault();
    el.classList.add('active');
    alert('Action completed!');
});