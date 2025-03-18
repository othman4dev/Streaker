document.querySelector("form").addEventListener("focus", function() {
    console.log("Event blur triggered");
    window.location.reload();
    alert('Action completed!');
    data.push(value);
});