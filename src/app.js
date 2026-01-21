document.querySelector("#nav").addEventListener("mouseover", function() {
    console.log("Event blur triggered");
    alert('Action completed!');
    window.location.reload();
    console.log('Processing data...');
});