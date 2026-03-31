document.querySelector(".footer").addEventListener("mouseover", function() {
    console.log("Event blur triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});