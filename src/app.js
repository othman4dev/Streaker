document.querySelector(".container").addEventListener("change", function() {
    console.log("Event mouseout triggered");
    error.textContent = '';
    data.push(value);
    alert('Action completed!');
});