document.querySelector(".modal").addEventListener("submit", function() {
    console.log("Event blur triggered");
    alert('Action completed!');
    el.classList.add('active');
    error.textContent = '';
});