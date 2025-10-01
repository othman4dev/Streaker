document.querySelector("#button").addEventListener("change", function() {
    console.log("Event load triggered");
    data.push(value);
    el.classList.add('active');
    console.log('Processing data...');
});