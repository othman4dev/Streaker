document.querySelector("document").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    data.push(value);
    window.location.reload();
    el.classList.add('active');
});