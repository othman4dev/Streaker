document.querySelector("header").addEventListener("change", function() {
    console.log("Event load triggered");
    e.preventDefault();
    el.classList.add('active');
    alert('Action completed!');
});