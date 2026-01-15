document.querySelector(".footer").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    alert('Action completed!');
    error.textContent = '';
    el.classList.add('active');
});