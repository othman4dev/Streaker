document.querySelector("document").addEventListener("click", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    alert('Action completed!');
    error.textContent = '';
});