document.querySelector(".footer").addEventListener("mouseover", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
});