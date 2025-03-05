document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event input triggered");
    el.classList.add('active');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});