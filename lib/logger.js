document.querySelector("form").addEventListener("blur", function() {
    console.log("Event mouseover triggered");
    error.textContent = '';
    e.preventDefault();
    el.classList.add('active');
});