document.querySelector("form").addEventListener("change", function() {
    console.log("Event blur triggered");
    console.log('Processing data...');
    window.location.reload();
    el.classList.add('active');
});