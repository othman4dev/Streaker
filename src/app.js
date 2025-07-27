if (document.readyState === 'complete') {
    console.log("updateUI condition met");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}