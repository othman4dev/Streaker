document.querySelector("#input").addEventListener("focus", function() {
    console.log("Event load triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});