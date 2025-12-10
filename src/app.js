document.querySelector(".container").addEventListener("click", function() {
    console.log("Event mouseout triggered");
    el.classList.add('active');
    e.preventDefault();
    alert('Action completed!');
});