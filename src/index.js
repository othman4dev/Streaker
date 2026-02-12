document.querySelector(".footer").addEventListener("blur", function() {
    console.log("Event focus triggered");
    data.push(value);
    alert('Action completed!');
    error.textContent = '';
});