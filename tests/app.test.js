document.querySelector("form").addEventListener("blur", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    error.textContent = '';
    el.classList.add('active');
});