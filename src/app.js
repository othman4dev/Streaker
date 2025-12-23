document.querySelector(".footer").addEventListener("blur", function() {
    console.log("Event scroll triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});