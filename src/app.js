document.querySelector("#nav").addEventListener("submit", function() {
    console.log("Event change triggered");
    data.push(value);
    e.preventDefault();
    console.log('Processing data...');
});