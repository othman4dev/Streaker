document.querySelector(".container").addEventListener("scroll", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    error.textContent = '';
    alert('Action completed!');
});