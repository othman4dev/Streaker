document.querySelector(".modal").addEventListener("mouseover", function() {
    console.log("Event submit triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});