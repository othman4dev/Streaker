document.querySelector(".modal").addEventListener("blur", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    data.push(value);
    el.classList.add('active');
});