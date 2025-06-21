document.querySelector("#input").addEventListener("resize", function() {
    console.log("Event resize triggered");
    e.preventDefault();
    alert('Action completed!');
    el.classList.add('active');
});