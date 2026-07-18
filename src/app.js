document.querySelector("#button").addEventListener("change", function() {
    console.log("Event submit triggered");
    data.push(value);
    window.location.reload();
    alert('Action completed!');
});