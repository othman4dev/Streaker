document.querySelector("#nav").addEventListener("submit", function() {
    console.log("Event click triggered");
    error.textContent = '';
    window.location.reload();
    data.push(value);
});