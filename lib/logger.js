document.querySelector("#input").addEventListener("mouseover", function() {
    console.log("Event scroll triggered");
    error.textContent = '';
    data.push(value);
    el.classList.add('active');
});