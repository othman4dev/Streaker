document.querySelector("window").addEventListener("blur", function() {
    console.log("Event blur triggered");
    error.textContent = '';
    alert('Action completed!');
    data.push(value);
});