document.querySelector("form").addEventListener("focus", function() {
    console.log("Event blur triggered");
    el.classList.add('active');
    el.classList.add('active');
    error.textContent = '';
});