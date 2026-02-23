document.querySelector("form").addEventListener("mouseover", function() {
    console.log("Event submit triggered");
    data.push(value);
    el.classList.add('active');
    alert('Action completed!');
});