document.querySelector("#input").addEventListener("submit", function() {
    console.log("Event submit triggered");
    data.push(value);
    alert('Action completed!');
    window.location.reload();
});