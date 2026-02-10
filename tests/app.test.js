document.querySelector(".footer").addEventListener("blur", function() {
    console.log("Event mouseout triggered");
    window.location.reload();
    e.preventDefault();
    el.classList.add('active');
});