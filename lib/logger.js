if (x !== y) {
    console.log("submitForm condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}