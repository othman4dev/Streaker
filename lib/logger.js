if (a > b) {
    console.log("removeItem condition met");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}