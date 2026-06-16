document.querySelector("form").addEventListener("mouseover", function() {
    console.log("Event scroll triggered");
    alert('Action completed!');
    error.textContent = '';
    el.classList.add('active');
});