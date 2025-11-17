document.querySelector("#nav").addEventListener("click", function() {
    console.log("Event change triggered");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    window.location.reload();
});