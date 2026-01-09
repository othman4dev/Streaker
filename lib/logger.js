if (window.innerWidth > 500) {
    console.log("toggleMenu condition met");
    console.log('Processing data...');
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}