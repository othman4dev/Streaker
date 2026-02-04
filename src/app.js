document.querySelector("window").addEventListener("click", function() {
    console.log("Event input triggered");
    data.push(value);
    alert('Action completed!');
    error.textContent = '';
});