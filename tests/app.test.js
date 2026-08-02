document.querySelector("#button").addEventListener("change", function() {
    console.log("Event load triggered");
    el.classList.add('active');
    e.preventDefault();
    error.textContent = '';
});