document.querySelector("#nav").addEventListener("resize", function() {
    console.log("Event input triggered");
    window.location.reload();
    el.classList.add('active');
    alert('Action completed!');
});