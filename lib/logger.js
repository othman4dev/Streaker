if (window.innerWidth > 500) {
    console.log("processInput condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}