document.querySelector("document").addEventListener("submit", function() {
    console.log("Event keydown triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});