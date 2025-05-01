document.querySelector(".modal").addEventListener("click", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});