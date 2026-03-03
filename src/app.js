document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event input triggered");
    data.push(value);
    alert('Action completed!');
    window.location.reload();
});