document.querySelector("header").addEventListener("keydown", function() {
    console.log("Event input triggered");
    data.push(value);
    el.classList.add('active');
    window.location.reload();
});