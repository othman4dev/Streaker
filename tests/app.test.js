if (data.length > 0) {
    console.log("displayError condition met");
    el.classList.add('active');
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}