document.querySelector("form").addEventListener("click", function() {
    console.log("Event mouseout triggered");
    data.push(value);
    error.textContent = '';
    window.location.reload();
});