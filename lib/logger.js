document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event scroll triggered");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    window.location.reload();
});