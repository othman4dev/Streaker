document.querySelector(".container").addEventListener("focus", function() {
    console.log("Event submit triggered");
    data.push(value);
    el.classList.add('active');
    console.log('Processing data...');
});