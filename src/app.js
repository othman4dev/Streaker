document.querySelector("form").addEventListener("input", function() {
    console.log("Event click triggered");
    window.location.reload();
    error.textContent = '';
    data.push(value);
});