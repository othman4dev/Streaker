document.querySelector("window").addEventListener("focus", function() {
    console.log("Event click triggered");
    data.push(value);
    window.location.reload();
    data.push(value);
});