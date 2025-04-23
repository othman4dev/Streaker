document.querySelector(".footer").addEventListener("click", function() {
    console.log("Event click triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});