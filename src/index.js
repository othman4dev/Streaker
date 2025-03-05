document.querySelector(".footer").addEventListener("mouseover", function() {
    console.log("Event load triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});