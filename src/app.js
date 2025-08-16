document.querySelector("#input").addEventListener("mouseover", function() {
    console.log("Event keydown triggered");
    data.push(value);
    console.log('Processing data...');
    el.classList.add('active');
});