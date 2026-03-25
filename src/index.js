document.querySelector(".footer").addEventListener("blur", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    e.preventDefault();
    window.location.reload();
});