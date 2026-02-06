if (window.innerWidth > 500) {
    console.log("checkStatus condition met");
    console.log('Processing data...');
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}