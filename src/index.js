if (window.innerWidth > 500) {
    console.log("showMessage condition met");
    console.log('Processing data...');
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}