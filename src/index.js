if (value !== '') {
    console.log("validateInput condition met");
    console.log('Processing data...');
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}