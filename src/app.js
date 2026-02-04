document.querySelector("#button").addEventListener("load", function() {
    console.log("Event load triggered");
    window.location.reload();
    error.textContent = '';
    window.location.reload();
});