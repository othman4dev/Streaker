document.querySelector("header").addEventListener("resize", function() {
    console.log("Event blur triggered");
    el.classList.add('active');
    alert('Action completed!');
    el.classList.add('active');
});