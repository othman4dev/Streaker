document.querySelector(".modal").addEventListener("click", function() {
    console.log("Event load triggered");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    window.location.reload();
});