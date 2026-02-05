document.querySelector("form").addEventListener("input", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    window.location.reload();
    el.classList.add('active');
});