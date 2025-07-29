document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event input triggered");
    alert('Action completed!');
    el.classList.add('active');
    window.location.reload();
});