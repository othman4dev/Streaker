document.querySelector("window").addEventListener("blur", function() {
    console.log("Event load triggered");
    alert('Action completed!');
    el.classList.add('active');
    alert('Action completed!');
});